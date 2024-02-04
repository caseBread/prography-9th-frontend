import { create } from "zustand";

interface InfiniteScrollLimitState {
  infiniteScrollLimit: number;
  setInfiniteScrollLimit: (limit: number) => void;
}

export const useInfiniteScrollLimitStore = create<InfiniteScrollLimitState>(
  (set, get) => {
    return {
      infiniteScrollLimit: 0,
      setInfiniteScrollLimit: (limit: number) => {
        set({ infiniteScrollLimit: limit });
      },
    };
  }
);
