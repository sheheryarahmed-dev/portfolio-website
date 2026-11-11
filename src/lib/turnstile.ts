export type TurnstileVerification = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
  action?: string;
  cdata?: string;
};

export async function verifyTurnstile(
  token: string,
  secret: string,
  hostname: string,
): Promise<boolean> {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    },
  );
  if (!response.ok)
    throw new Error("Turnstile verification service unavailable");
  const result: TurnstileVerification = await response.json();
  return (
    result.success === true &&
    result.hostname === hostname &&
    result.action === "contact"
  );
}
