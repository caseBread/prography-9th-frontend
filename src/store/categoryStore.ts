import axios from "axios";
import create from "zustand";
import { MealsResponse } from "../type/meal";
import { QUERY_STORE } from "../constants/queryStore";

// NOTE : 초기값을 query string으로부터 가져온다.
const urlParams = new URLSearchParams(window.location.search);
const defaultQuerySortType = urlParams.get(QUERY_STORE.SORT_TYPE) ?? "desc";
const defaultQueryCategories = urlParams.get("category")?.split(",") ?? [];

const fetchMealsByCategory = async (category: string) => {
  try {
    const { data }: { data: MealsResponse } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    const meals = data?.meals?.map((meal) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      thumbnail: meal.strMealThumb,
      category: category,
    }));

    return meals;
  } catch (error) {
    return [];
  }
};

export interface Meal {
  id: string;
  thumbnail: string;
  name: string;
  category: string;
}

interface CategoryState {
  categories: string[];
  meals: Meal[];
  sortTypeList: { value: string; label: string }[];
  selectedSortType: string;

  setSelectedSortType: (sortType: string) => void;
  toggleCategory: (name: string) => void;
  isCategoryExists: (name: string) => boolean;
}

export const useSelectedCategoryStore = create<CategoryState>((set, get) => {
  const mealsCache: Record<string, Meal[]> = {};

  const sortMeals = (meals: Meal[], sortType: string) => {
    return [...meals].sort((a, b) => {
      if (sortType === "asc") {
        return a.name.localeCompare(b.name);
      } else if (sortType === "desc") {
        return b.name.localeCompare(a.name);
      } else {
        return b.id.localeCompare(a.id);
      }
    });
  };

  defaultQueryCategories.forEach(async (category) => {
    if (!category) return;

    if (!mealsCache[category]) {
      const newMeals = await fetchMealsByCategory(category);
      mealsCache[category] = newMeals;
      set((state) => ({
        ...state,
        meals: sortMeals([...get().meals, ...newMeals], state.selectedSortType),
      }));
    }
  });

  return {
    categories: defaultQueryCategories,
    meals: [],
    sortTypeList: [
      {
        value: "desc",
        label: "이름 내림차순",
      },
      {
        value: "asc",
        label: "이름 오름차순",
      },
      {
        value: "new",
        label: "최신순",
      },
    ],
    selectedSortType: defaultQuerySortType,
    mealsLimit: 0,
    setSelectedSortType: (sortType) => {
      set((state) => {
        return {
          ...state,
          selectedSortType: sortType,
          meals: sortMeals(state.meals, sortType),
        };
      });
    },
    toggleCategory: async (name) => {
      const isExisting = get().categories.includes(name);
      if (isExisting) {
        set((state) => ({
          categories: state.categories.filter((category) => category !== name),
          meals: state.meals.filter((meal) => meal.category !== name),
        }));
      } else {
        set((state) => ({
          ...state,
          categories: [...state.categories, name],
        }));

        if (!mealsCache[name]) {
          const newMeals = await fetchMealsByCategory(name);

          mealsCache[name] = newMeals;

          const mealsToSet = [...get().meals, ...newMeals];

          set((state) => ({
            ...state,
            meals: sortMeals(mealsToSet, state.selectedSortType),
          }));
        } else {
          const mealsToSet = [...get().meals, ...mealsCache[name]];

          set((state) => ({
            ...state,
            meals: sortMeals(mealsToSet, state.selectedSortType),
          }));
        }
      }
    },
    isCategoryExists: (name) => {
      return get().categories.includes(name);
    },
  };
});
