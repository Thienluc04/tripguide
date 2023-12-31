interface BestPlace {
  image: string;
  title: string;
  description: string;
}

interface Explore {
  image: string;
  rating: number;
  totalRating: number;
  title: string;
  description: string;
  address: string;
  roomsAvailable: number;
  price: number;
}

interface City {
  image: string;
  title: string;
  rating: number;
  totalRating: number;
  price: number;
}

interface Tour {
  image: string;
  name: string;
  title: string;
  description: string;
}

interface Passion {
  image: string;
  title: string;
  rating: number;
  totalRating: number;
}

interface Location {
  title: string;
  description: string;
}

interface HotelParams {
  location?: string;
  checkInDate?: string;
  checkOutDate?: string;
  passenger?: {
    adults?: number;
    children?: number;
    infants?: number;
  };
}

interface Hotel {
  image: string;
  title: string;
  rating: number;
  totalRate: number;
  location: string;
  place: string;
  date: string;
  plane: string;
}
