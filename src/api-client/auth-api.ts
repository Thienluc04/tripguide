import { PATH_API } from "@/constants/path-api.const";
import axiosClient from "./axios-client";

const authApi = {
  register: async (payload: RegisterRequest) => {
    const response = await axiosClient.post<CommonResponse<TokensResult>>(
      PATH_API.REGISTER,
      payload,
    );
    return response.data;
  },
  login: async (payload: LoginRequest) => {
    const response = await axiosClient.post<CommonResponse<LoginResponse>>(
      PATH_API.LOGIN,
      payload,
    );

    const { access_token, refresh_token } = response.data
      .result as LoginResponse;

    await fetch(PATH_API.SET_TOKEN, {
      method: "post",
      body: JSON.stringify({ access_token, refresh_token }),
    });

    return response.data;
  },
  logout: async (payload: TokensResult) => {
    await fetch(PATH_API.DELETE_TOKEN, {
      method: "delete",
    });

    const response = await axiosClient.post<CommonResponse<void>>(
      PATH_API.LOGOUT,
      { refresh_token: payload.refresh_token },
      {
        headers: {
          Authorization: `Bearer ${payload.access_token}`,
        },
      },
    );

    return response.data;
  },
  forgotPassword: async (payload: ForgotPasswordRequest) => {
    const response = await axiosClient.post<CommonResponse<void>>(
      PATH_API.FORGOT_PASSWORD,
      payload,
    );

    return response.data;
  },
  resetPassword: async (payload: ResetPasswordRequest) => {
    const response = await axiosClient.post<CommonResponse<void>>(
      PATH_API.RESET_PASSWORD,
      payload,
    );
    return response.data;
  },
  refreshToken: async (payload: RefreshTokenRequest) => {
    const response = await axiosClient.post<CommonResponse<TokensResult>>(
      PATH_API.REFRESH_TOKEN,
      payload,
    );

    return response.data;
  },
};

export default authApi;
