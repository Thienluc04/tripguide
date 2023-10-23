export interface BestPlace {
  image: string;
  title: string;
  description: string;
}

export interface Explore {
  image: string;
  rating: number;
  totalRating: number;
  title: string;
  description: string;
  address: string;
  roomsAvailable: number;
  price: number;
}

export interface City {
  image: string;
  title: string;
  rating: number;
  totalRating: number;
  price: number;
}

export interface Tour {
  image: string;
  name: string;
  title: string;
  description: string;
}

export interface Passion {
  image: string;
  title: string;
  rating: number;
  totalRating: number;
}

export interface Location {
  title: string;
  description: string;
}

export interface HotelParams {
  location?: string;
  checkInDate?: string;
  checkOutDate?: string;
  passenger?: {
    adults?: number;
    children?: number;
    infants?: number;
  };
}

export interface Hotel {
  image: string;
  title: string;
  rating: number;
  totalRate: number;
  location: string;
  place: string;
  date: string;
  plane: string;
}
