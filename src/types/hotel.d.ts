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
  image: string | StaticImport;
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

interface LocationHotel {
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

interface Amenity {
  icon: string;
  name: string;
}

interface Hotel {
  _id?: string;
  name: string;
  address: string;
  rating: number;
  total_rating: number;
  features: Feature[];
  reviews: Review[];
  list_image: string[];
  amenities: Amenity[];
  utilities: string[];
  description: string;
  price: number;
  quantity: number;
  discount?: number;
  created_at?: Date;
  updated_at?: Date;
}

interface ListHotelResponse extends Pagination {
  hotels: Hotel[];
}
