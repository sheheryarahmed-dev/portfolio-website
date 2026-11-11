import { NextResponse } from "next/server";
import { z } from "zod";
import { contactRequestSchema } from "@/lib/validations";
import { verifyTurnstile } from "@/lib/turnstile";
import { sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";

const configurationSchema = z.object({
  apiKey: z.string().trim().min(1),
  secret: z.string().trim().min(1),
  from: z.string().trim().email(),
  to: z.string().trim().email(),
  siteUrl: z.string().url(),
});

function errorResponse(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  const configuration = configurationSchema.safeParse({
    apiKey: process.env.RESEND_API_KEY,
    secret: process.env.TURNSTILE_SECRET_KEY,
    from: process.env.CONTACT_EMAIL_FROM,
    to: process.env.CONTACT_EMAIL_TO,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  });
  if (!configuration.success) {
    console.error("Contact configuration is missing or invalid.");
    return errorResponse(
      "Sending is temporarily unavailable. Please contact me by email.",
      503,
    );
  }
  const config = configuration.data;
  const site = new URL(config.siteUrl);
  if (request.headers.get("origin") !== site.origin) {
    return errorResponse("This request is not permitted.", 403);
  }
  if (
    request.headers.get("content-type")?.split(";")[0].trim() !==
    "application/json"
  ) {
    return errorResponse("Send the form as JSON.", 415);
  }

  const reader = request.body?.getReader();
  if (!reader) return errorResponse("The form is empty.", 400);
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 32768) {
        await reader.cancel();
        return errorResponse("The form is too large.", 413);
      }
      chunks.push(value);
    }
  } catch {
    console.error("Contact request body could not be read.");
    return errorResponse("Unable to read the form. Please try again.", 400);
  }
  let input: unknown;
  try {
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return errorResponse("The form contains invalid JSON.", 400);
  }
  const parsed = contactRequestSchema.safeParse(input);
  if (!parsed.success) {
    return errorResponse(
      "Check your name, email, message, and security check.",
      400,
    );
  }
  const { name, email, message, turnstileToken } = parsed.data;
  try {
    const verified = await verifyTurnstile(
      turnstileToken,
      config.secret,
      site.hostname,
    );
    if (!verified)
      return errorResponse(
        "The security check expired or failed. Please try again.",
        400,
      );
  } catch {
    console.error("Contact security verification service failed.");
    return errorResponse(
      "Security verification is temporarily unavailable. Please try again later.",
      502,
    );
  }
  try {
    await sendContactEmail(config.apiKey, {
      from: config.from,
      to: config.to,
      replyTo: email,
      subject: "New portfolio contact message",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch {
    console.error("Contact email delivery failed.");
    return errorResponse(
      "Your message could not be sent. Please try again later or contact me by email.",
      502,
    );
  }
  return NextResponse.json({
    message: "Your message has been sent. Thank you for getting in touch!",
  });
}
