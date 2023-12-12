import { ReactElement } from 'react';

export interface TabLink {
  path: string;
  icon: ReactElement;
  label: string;
}

export interface TrendItem {
  image: string;
  name: string;
  rating: number;
  totalReviews: number;
}

export type CreditCardType =
  | 'mastercard'
  | 'paypal'
  | 'visa'
  | 'americanExpress'
  | 'discover';

export type BookingType = 'hotel' | 'flight' | 'car' | '';
