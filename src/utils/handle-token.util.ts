import { TOKEN_NAME } from "@/constants/token.const";

export const saveToken = ({
  access_token,
  refresh_token,
}: {
  access_token?: string;
  refresh_token?: string;
}) => {
  if (access_token && access_token?.length > 0) {
    localStorage.setItem(TOKEN_NAME.ACCESS_TOKEN, access_token);
  }
  if (refresh_token && refresh_token?.length > 0) {
    localStorage.setItem(TOKEN_NAME.REFRESH_TOKEN, refresh_token);
  }
};

export const getToken = (token_name: string) => {
  if (token_name.length > 0) {
    const tokenValue = localStorage.getItem(token_name);
    return tokenValue;
  }
};
