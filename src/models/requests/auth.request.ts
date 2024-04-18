interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface ForgotPasswordRequest {
  email: string;
}

interface ResetPasswordRequest {
  forgot_password_token: string;
  password: string;
  confirm_password: string;
}

interface RefreshTokenRequest {
  refresh_token: string
}