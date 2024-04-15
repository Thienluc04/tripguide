interface CommonParams {
  theme?: "dark" | "light";
  currentUser?: object;
  tokens?: TokensResult;
}

interface CommonResponse<T> {
  message: string;
  result?: T;
}
