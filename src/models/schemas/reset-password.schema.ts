import { z } from "zod";

export const ResetPasswordSchema = z.object({
  password: z
    .string()
    .min(6, "Password must have at least 6 characters")
    .default(""),
  confirm_password: z
    .string()
    .min(6, "Confirm password must have at least 6 characters")
    .default(""),
});

export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
