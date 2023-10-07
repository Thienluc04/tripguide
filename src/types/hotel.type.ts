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
