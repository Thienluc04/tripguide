import { StoreApi, UseBoundStore, create } from 'zustand';

interface CarStore {
  params: CarParams;
  setParams: (params: CarParams) => void;
}

export const useCarStore: UseBoundStore<StoreApi<CarStore>> = create((set) => ({
  params: {
    from: '',
    to: '',
    checkInDate: new Date().toLocaleDateString('en-GB'),
    checkOutDate: new Date().toLocaleDateString('en-GB'),
  },
  setParams: (params: CarParams) => {
    set(() => ({ params }));
  },
}));
