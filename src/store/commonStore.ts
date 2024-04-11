import { StoreApi, UseBoundStore, create } from "zustand";

interface CommonStore {
  params: CommonParams;
  setParams: (params: CommonParams) => void;
}

export const useCommonStore: UseBoundStore<StoreApi<CommonStore>> = create(
  (set) => ({
    params: {
      theme: "light",
    },
    setParams: (params: CommonParams) => {
      set(() => ({ params }));
    },
  }),
);
