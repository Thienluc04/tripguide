"use client";

import { StoreApi, UseBoundStore, create } from "zustand";

interface CommonStore {
  params: CommonParams;
  setParams: (params: CommonParams) => void;
}

export const useCommonStore: UseBoundStore<StoreApi<CommonStore>> = create(
  (set) => ({
    params: {
      theme:
        (typeof localStorage !== "undefined" &&
          (localStorage?.getItem("theme") as "light" | "dark")) ||
        "light",
    },
    setParams: (params: CommonParams) => {
      set(() => ({ params }));
    },
  }),
);
