import { ReactElement } from "react";

interface TabLink {
  path: string;
  icon: ReactElement;
  label: string;
}

interface TrendItem {
  image: string;
  name: string;
  rating: number;
  totalReviews: number;
}

type PaymentItemType =
  | "mastercard"
  | "paypal"
  | "visa"
  | "americanExpress"
  | "discover";

type BookingType = "hotel" | "flight" | "car" | "";

interface Pagination {
  limit: number;
  page: number;
  total_items: number;
  total_pages: number;
}
