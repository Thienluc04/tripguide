interface CurrentUser {
  name: string;
  avatar: string;
}

interface CommonParams {
  theme?: "dark" | "light";
  currentUser?: CurrentUser;
  tokens?: TokensResult;
}

interface CommonResponse<T> {
  message: string;
  result?: T;
}
