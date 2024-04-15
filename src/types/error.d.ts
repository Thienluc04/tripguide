type ErrorsType = Record<
  string,
  {
    msg: string;
    [key: string]: any;
  }
>;

interface ErrorResponse {
  message: string;
  errors?: ErrorsType;
  errorInfo?: {
    [key: string]: any;
  };
}
