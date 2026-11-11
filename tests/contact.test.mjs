import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const loadPackage = createRequire(import.meta.url);

// Exercise the real TypeScript pipeline with isolated provider responses and fake credentials.
function harness(options = {}) {
  const calls = [];
  const cache = new Map();
  const env = {
    RESEND_API_KEY: "test-key",
    TURNSTILE_SECRET_KEY: "test-secret",
    CONTACT_EMAIL_FROM: "sender@example.com",
    CONTACT_EMAIL_TO: "owner@example.com",
    NEXT_PUBLIC_SITE_URL: "https://portfolio.example",
    ...options.env,
  };
  function load(file) {
    if (cache.has(file)) return cache.get(file);
    const compiledModule = { exports: {} };
    const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText;
    vm.runInNewContext(
      source,
      {
        module: compiledModule,
        exports: compiledModule.exports,
        require(name) {
          if (name === "next/server")
            return {
              NextResponse: { json: (body, init) => Response.json(body, init) },
            };
          if (name === "resend")
            return {
              Resend: class {
                emails = {
                  send: async (email) => {
                    calls.push({ type: "email", email });
                    if (options.emailThrows)
                      throw new Error("private provider error");
                    return options.emailError
                      ? { error: { message: "private provider error" } }
                      : { data: { id: "email-1" } };
                  },
                };
              },
            };
          if (name.startsWith("@/"))
            return load(path.resolve("src", `${name.slice(2)}.ts`));
          return loadPackage(name);
        },
        process: { env },
        console: { error() {} },
        Buffer,
        URL,
        URLSearchParams,
        AbortSignal,
        fetch: async (url, init) => {
          calls.push({ type: "turnstile", url, init });
          if (options.verificationThrows)
            throw new Error("private verification error");
          return Response.json(
            options.verification ?? {
              success: true,
              hostname: "portfolio.example",
              action: "contact",
            },
            { status: options.verificationStatus ?? 200 },
          );
        },
      },
      { filename: file },
    );
    cache.set(file, compiledModule.exports);
    return compiledModule.exports;
  }
  const { POST } = load(path.resolve("src/app/api/contact/route.ts"));
  const data = {
    name: "Visitor",
    email: "visitor@example.com",
    message: "Hello from the portfolio.",
    turnstileToken: "test-token",
  };
  return {
    calls,
    submit: (request = {}) =>
      POST(
        new Request("https://portfolio.example/api/contact", {
          method: "POST",
          headers: {
            origin: "https://portfolio.example",
            "content-type": "application/json",
            ...request.headers,
          },
          body: request.body ?? JSON.stringify({ ...data, ...request.data }),
        }),
      ),
  };
}

test("sends a validated plain-text email only after verification", async () => {
  const h = harness();
  const response = await h.submit({
    data: { name: "  Visitor  ", message: "<script>text only</script>" },
  });
  assert.equal(response.status, 200);
  assert.deepEqual(
    h.calls.map((call) => call.type),
    ["turnstile", "email"],
  );
  const email = h.calls[1].email;
  assert.equal(email.to, "owner@example.com");
  assert.equal(email.replyTo, "visitor@example.com");
  assert.match(email.text, /^Name: Visitor\n/);
  assert.ok(!("html" in email));
});

for (const [label, request, status] of [
  ["wrong origin", { headers: { origin: "https://attacker.example" } }, 403],
  ["wrong content type", { headers: { "content-type": "text/plain" } }, 415],
  ["malformed JSON", { body: "{" }, 400],
  ["empty name", { data: { name: " " } }, 400],
  ["invalid email", { data: { email: "not-an-email" } }, 400],
  ["oversized message", { data: { message: "x".repeat(5001) } }, 400],
  ["missing token", { data: { turnstileToken: "" } }, 400],
  ["unexpected recipient", { data: { to: "attacker@example.com" } }, 400],
  ["oversized body", { body: "x".repeat(32769) }, 413],
]) {
  test(`rejects ${label} without contacting providers`, async () => {
    const h = harness();
    assert.equal((await h.submit(request)).status, status);
    assert.equal(h.calls.length, 0);
  });
}

for (const verification of [
  { success: false },
  { success: true, hostname: "attacker.example", action: "contact" },
  { success: true, hostname: "portfolio.example", action: "login" },
]) {
  test(`rejects invalid Turnstile result ${JSON.stringify(verification)}`, async () => {
    const h = harness({ verification });
    assert.equal((await h.submit()).status, 400);
    assert.equal(h.calls.length, 1);
  });
}

for (const options of [
  { verificationThrows: true },
  { verificationStatus: 500 },
  { emailError: true },
  { emailThrows: true },
]) {
  test(`returns a safe provider failure ${JSON.stringify(options)}`, async () => {
    const h = harness(options);
    const response = await h.submit();
    assert.equal(response.status, 502);
    assert.doesNotMatch(await response.text(), /private|test-key|test-secret/);
  });
}

test("fails closed when configuration is absent", async () => {
  const h = harness({ env: { RESEND_API_KEY: undefined } });
  assert.equal((await h.submit()).status, 503);
  assert.equal(h.calls.length, 0);
});
