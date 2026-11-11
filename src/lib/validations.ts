import { z } from "zod";

export const contactRequestSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, "Enter your name.")
      .max(100, "Use at most 100 characters."),
    email: z.string().trim().email("Enter a valid email address.").max(254),
    message: z
      .string()
      .trim()
      .min(1, "Enter your message.")
      .max(5000, "Use at most 5,000 characters."),
    turnstileToken: z.string().min(1, "Complete the security check.").max(2048),
  })
  .strict();

export type ContactRequest = z.infer<typeof contactRequestSchema>;
