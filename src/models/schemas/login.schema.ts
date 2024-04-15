import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("This email is invalid"),
  password: z.string().min(6, "Password must have at least 6 characters"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
