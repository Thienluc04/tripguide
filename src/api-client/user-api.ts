import { PATH_API } from "@/constants/path-api.const";
import axiosClient from "./axios-client";
import { User } from "@/types/user";
import {
  ChangePasswordRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  UpdateProfileRequest,
  VerifyEmailRequest,
  VerifyForgotPasswordRequest,
} from "@/models/requests/user.request";

const userApi = {
  forgotPassword: async (payload: ForgotPasswordRequest) => {
    const response = await axiosClient.post<CommonResponse<void>>(
      PATH_API.FORGOT_PASSWORD,
      payload,
    );

    return response.data;
  },

  verifyForgotPassword: async (payload: VerifyForgotPasswordRequest) => {
    const response = await axiosClient.post<CommonResponse<void>>(
      PATH_API.VERIFY_FORGOT_PASSWORD,
      payload,
    );

    return response.data 
  },

  resetPassword: async (payload: ResetPasswordRequest) => {
    const response = await axiosClient.post<CommonResponse<void>>(
      PATH_API.RESET_PASSWORD,
      payload,
    );
    return response.data;
  },

  changePassword: async (access_token:string,payload: ChangePasswordRequest) => {
    const response = await axiosClient.post<CommonResponse<void>>(PATH_API.CHANGE_PASSWORD, payload, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },)
    return response.data
  },

  getProfile: async (access_token: string) => {
    const response = await axiosClient.get<CommonResponse<User>>(
      PATH_API.GET_PROFILE,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return response.data;
  },

  updateProfile: async (
    access_token: string,
    payload: UpdateProfileRequest,
  ) => {
    const response = await axiosClient.patch<CommonResponse<User>>(
      PATH_API.UPDATE_PROFILE,
      payload,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    return response.data;
  },

  verifyEmail: async (payload: VerifyEmailRequest) => {
    const response = await axiosClient.post<CommonResponse<void>>(
      PATH_API.VERIFY_EMAIL,
      payload,
    );

    return response.data;
  },

  resendVerifyEmail: async (access_token: string) => {
    const response = await axiosClient.post<CommonResponse<void>>(
      PATH_API.RESEND_VERIFY_EMAIL,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return response.data;
  },
};

export default userApi;
