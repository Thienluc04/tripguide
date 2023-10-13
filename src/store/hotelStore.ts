import { HotelParams } from '@/types/hotel.type';
import { create, UseBoundStore, StoreApi } from 'zustand';

interface HotelStore {
  params: HotelParams;
  setParams: (params: HotelParams) => void;
}

export const useHotelStore: UseBoundStore<StoreApi<HotelStore>> = create(
  (set) => ({
    params: {
      checkInDate: new Date().toLocaleDateString('en-GB'),
      checkOutDate: new Date().toLocaleDateString('en-GB'),
      passenger: {
        adults: 0,
        children: 0,
        infants: 0,
      },
    },
    setParams: (params: HotelParams) => {
      set(() => ({ params }));
    },
  })
);
