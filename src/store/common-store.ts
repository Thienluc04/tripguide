import { StoreApi, UseBoundStore, create } from "zustand";

interface CommonStore {
  params: CommonParams;
  setParams: (params: CommonParams) => void;
}

export const useCommonStore: UseBoundStore<StoreApi<CommonStore>> = create(
  (set) => ({
    params: {
      theme:
        new Date().getHours() > 19 || new Date().getHours() < 6
          ? "dark"
          : "light",
    },
    setParams: (params: CommonParams) => {
      set(() => ({ params }));
    },
  }),
);
