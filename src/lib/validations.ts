import { z } from "zod";

export const contactRequestSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(254),
    message: z.string().trim().min(1).max(5000),
    turnstileToken: z.string().min(1).max(2048),
  })
  .strict();

export type ContactRequest = z.infer<typeof contactRequestSchema>;
