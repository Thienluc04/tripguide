import { StoreApi, UseBoundStore, create } from 'zustand';

interface FlightStore {
  params: FlightParams;
  setParams: (params: FlightParams) => void;
}

export const useFlightStore: UseBoundStore<StoreApi<FlightStore>> = create(
  (set) => ({
    params: {
      from: '',
      to: '',
      checkInDate: new Date().toLocaleDateString('en-GB'),
      checkOutDate: new Date().toLocaleDateString('en-GB'),
      passenger: {
        adults: 0,
        children: 0,
        infants: 0,
      },
    },
    setParams: (params: FlightParams) => {
      set(() => ({ params }));
    },
  })
);
