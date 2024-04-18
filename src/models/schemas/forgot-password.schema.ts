import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.string().email("This email is invalid"),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
