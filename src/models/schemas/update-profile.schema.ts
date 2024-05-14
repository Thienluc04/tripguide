import { Language, UserGender } from "@/constants/enum.const";
import { z } from "zod";

export const UpdateProfileSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("This email is invalid").optional(),
  date_of_birth: z.string().optional(),
  street_address: z.string().optional(),
  live_in: z.string().optional(),
  website: z.string().optional(),
  phone_number: z.string().optional(),
  gender: z.nativeEnum(UserGender).optional(),
  language: z.nativeEnum(Language).optional(),
  avatar_image: z.string().optional(),
});

export type UpdateProfileSchemaType = z.infer<typeof UpdateProfileSchema>;
