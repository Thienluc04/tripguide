import { Language, UserGender, UserStatus } from "@/constants/enum.const";

interface LoginResponse extends TokensResult {
  avatar: string;
  name: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  phone_number: string;
  avatar_image: string;
  status: UserStatus;
  street_address: string;
  live_in: string;
  date_of_birth: string;
  gender: UserGender;
  language: Language;
  website: string;
  created_at: string;
  updated_at: string;
}
