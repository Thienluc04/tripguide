import authApi from "@/api-client/auth-api";
import { PATH_API } from "@/constants/path-api.const";
import { LOCAL_TOKEN_NAME } from "@/constants/token.const";
import { BookingType } from "@/types/general";

export const getListDetailBooking = (type: BookingType) => {
  return [
    "Home",
    type === "hotel"
      ? "Hotel list"
      : type === "flight"
        ? "Flight list"
        : type === "car"
          ? "Car list"
          : "",
    type === "hotel"
      ? "Hotel details"
      : type === "flight"
        ? "Flight details"
        : type === "car"
          ? "Car details"
          : "",
  ];
};

export const getLocalToken = (name: string) => {
  if (localStorage.getItem(name)) {
    const token = localStorage.getItem(name);
    return token;
  }
};

export const setLocalToken = (array: { name: string; value: string }[]) => {
  array.forEach((item) => {
    localStorage.setItem(item.name, item.value);
  });
};

export const removeLocalToken = (items: string | string[]) => {
  if (typeof items === "string") {
    localStorage.removeItem(items);
  } else {
    items.forEach((item) => localStorage.removeItem(item));
  }
};

export const getNewTokens = async (
  refresh_token: string,
  params: CommonParams,
  setParams: (params: CommonParams) => void,
) => {
  const data = await authApi.refreshToken({ refresh_token });
  try {
    if (data.result?.access_token) {
      await fetch(PATH_API.SET_TOKEN, {
        method: "post",
        body: JSON.stringify({ ...data.result }),
      });
      const name = getLocalToken(LOCAL_TOKEN_NAME.NAME_USER) || "";
      const avatar = getLocalToken(LOCAL_TOKEN_NAME.AVATAR) || "";
      setParams({
        ...params,
        tokens: data.result,
        currentUser: { name, avatar },
      });
    }
  } catch (error) {
    const tokens = params.tokens as TokensResult;
    await authApi.logout({ ...tokens });
    setParams({ theme: params.theme });
  }
};
