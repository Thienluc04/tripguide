import { Language, UserGender } from "@/constants/enum.const";

export interface VerifyEmailRequest {
  email_verify_token: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface VerifyForgotPasswordRequest {
  forgot_password_token: string;
}

export interface ResetPasswordRequest {
  forgot_password_token: string;
  password: string;
  confirm_password: string;
}

export interface ChangePasswordRequest {
  old_password: string;
  password: string;
  confirm_password: string;
}

export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  date_of_birth?: string;
  street_address?: string;
  phone_number?: string;
  gender?: UserGender;
  language?: Language;
  avatar_image?: string;
}
