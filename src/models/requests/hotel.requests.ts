export interface GetListHotelRequest {
  page: number;
  limit: number;
  name?: string;
  price?: number;
  rating?: number;
}
