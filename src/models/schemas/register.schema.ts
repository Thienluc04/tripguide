import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, "This field is required").default(""),
  email: z.string().email("This email is invalid").default(""),
  password: z
    .string()
    .min(6, "Password must have at least 6 characters")
    .default(""),
  confirm_password: z
    .string()
    .min(6, "Confirm password must have at least 6 characters")
    .default(""),
  terms: z.boolean().default(false),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
