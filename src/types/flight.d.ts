interface FlightParams {
  from?: string;
  to?: string;
  checkInDate?: string;
  checkOutDate?: string;
  passenger?: {
    adults?: number;
    children?: number;
    infants?: number;
  };
}
