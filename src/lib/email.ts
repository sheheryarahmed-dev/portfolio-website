import { Resend } from "resend";

export type ContactEmail = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
};

export async function sendContactEmail(apiKey: string, email: ContactEmail) {
  const result = await new Resend(apiKey).emails.send(email);
  if (result.error || !result.data?.id)
    throw new Error("Email delivery was not accepted");
}
