import create from "zustand";

interface SortSizeStore {
  sortSizeList: { value: string; label: string }[];
  sortTypeList: { value: string; label: string }[];
  selectedSortSize: string;
  selectedSortType: string;

  setSelectedSortSize: (sortSize: string) => void;
}

const useSortSizeStore = create<SortSizeStore>((set) => ({
  sortSizeList: [
    { value: "4", label: "4개 보기" },
    { value: "2", label: "2개 보기" },
  ],
  sortTypeList: [
    {
      value: "desc",
      label: "이름 내림차순",
    },
    {
      value: "asc",
      label: "이름 오름차순",
    },
  ],
  selectedSortSize: "4",
  selectedSortType: "desc",
  setSelectedSortSize: (sortSize) => set({ selectedSortSize: sortSize }),
}));

export default useSortSizeStore;
