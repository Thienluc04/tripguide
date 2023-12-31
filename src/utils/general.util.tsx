import { BookingType } from '@/types/general';

export const getListDetailBooking = (type: BookingType) => {
  return [
    'Home',
    type === 'hotel'
      ? 'Hotel list'
      : type === 'flight'
      ? 'Flight list'
      : type === 'car'
      ? 'Car list'
      : '',
    type === 'hotel'
      ? 'Hotel details'
      : type === 'flight'
      ? 'Flight details'
      : type === 'car'
      ? 'Car details'
      : '',
  ];
};
