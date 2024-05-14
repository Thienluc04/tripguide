import { Media } from "@/types/media";
import axiosClient from "./axios-client";
import { PATH_API } from "@/constants/path-api.const";

const mediaApi = {
  uploadImage: async (payload: FormData, access_token: string) => {
    const response = await axiosClient.post<CommonResponse<Media[]>>(
      PATH_API.UPLOAD_IMAGE,
      payload,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  },
};

export default mediaApi;
