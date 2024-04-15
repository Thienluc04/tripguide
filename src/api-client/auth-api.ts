import { LINK_API } from "@/constants/link-api.const";
import axiosClient from "./axios-client";

const authApi = {
  register: async (payload: RegisterRequest) => {
    const response = await axiosClient.post<CommonResponse<TokensResult>>(
      LINK_API.REGISTER,
      payload,
    );
    return response.data;
  },
  login: async (payload: LoginRequest) => {
    const response = await axiosClient.post<CommonResponse<TokensResult>>(
      LINK_API.LOGIN,
      payload,
    );

    const { access_token, refresh_token } = response.data
      .result as TokensResult;

    await fetch("/api/auth", {
      method: "post",
      body: JSON.stringify({ access_token, refresh_token }),
    });

    return response.data;
  },
};

export default authApi;
