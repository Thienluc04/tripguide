import { z } from "zod";

export const ChangePasswordSchema = z.object({
  old_password: z
    .string()
    .min(6, "Password must have at least 6 characters")
    .default(""),
  password: z
    .string()
    .min(6, "Password must have at least 6 characters")
    .default(""),
  confirm_password: z
    .string()
    .min(6, "Confirm password must have at least 6 characters")
    .default(""),
});

export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>;
