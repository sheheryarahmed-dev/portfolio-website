import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Future request contract: JSON with name, email, message, and turnstileToken.
 * The email, anti-spam, and rate-limit workflow is intentionally not enabled yet.
 */
export async function POST() {
  return NextResponse.json(
    { error: "Contact submissions are not available yet." },
    { status: 501 },
  );
}
