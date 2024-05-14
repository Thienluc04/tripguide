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

interface RefreshTokenRequest {
  refresh_token: string;
}
