import { PATH_API } from "@/constants/path-api.const";
import axiosClient from "./axios-client";
import { GetListHotelRequest } from "@/models/requests/hotel.requests";

const hotelApi = {
  getListHotel: async (access_token: string, payload: GetListHotelRequest) => {
    const response = await axiosClient.get<CommonResponse<ListHotelResponse>>(
      PATH_API.GET_LIST_HOTEL,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        params: {
          ...payload,
        },
      },
    );

    return response.data;
  },
};

export default hotelApi;
