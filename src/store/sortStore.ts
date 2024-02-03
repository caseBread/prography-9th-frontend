import create from "zustand";

interface SortSizeStore {
  sortSizeList: { value: string; label: string }[];

  selectedSortSize: string;

  setSelectedSortSize: (sortSize: string) => void;
}

const useSortSizeStore = create<SortSizeStore>((set) => ({
  sortSizeList: [
    { value: "4", label: "4개 보기" },
    { value: "2", label: "2개 보기" },
  ],

  selectedSortSize: "4",
  setSelectedSortSize: (sortSize) => set({ selectedSortSize: sortSize }),
}));

export default useSortSizeStore;
