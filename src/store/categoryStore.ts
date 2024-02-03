import axios from "axios";
import create from "zustand";
import { MealsResponse } from "../type/meal";

const fetchMealsByCategory = async (category: string) => {
  try {
    const { data }: { data: MealsResponse } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    const meals = data?.meals?.map((meal) => ({
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
  thumbnail: string;
  name: string;
  category: string;
}

interface CategoryState {
  categories: string[];
  meals: Meal[];
  toggleCategory: (name: string) => void;
  isCategoryExists: (name: string) => boolean;
}

export const useSelectedCategoryStore = create<CategoryState>((set, get) => {
  const mealsCache: Record<string, Meal[]> = {};

  return {
    categories: [],
    meals: [],
    toggleCategory: async (name) => {
      const isExisting = get().categories.includes(name);
      if (isExisting) {
        // 카테고리 제거
        set((state) => ({
          categories: state.categories.filter((category) => category !== name),
          meals: state.meals.filter((meal) => meal.category !== name), // meals에서 해당 카테고리 데이터 제거
        }));
      } else {
        set((state) => ({
          ...state,
          categories: [...state.categories, name],
        }));

        if (!mealsCache[name]) {
          // 캐시에 해당 카테고리 데이터가 없으면 API 호출
          const newMeals = await fetchMealsByCategory(name);

          // 데이터를 캐싱하고 저장
          mealsCache[name] = newMeals;

          set((state) => ({
            ...state,
            meals: [...state.meals, ...newMeals],
          }));
        } else {
          // 캐시에 해당 카테고리 데이터가 있으면 캐시된 데이터를 사용
          set((state) => ({
            ...state,
            meals: [...state.meals, ...mealsCache[name]],
          }));
        }
      }
    },
    isCategoryExists: (name) => {
      return get().categories.includes(name);
    },
  };
});
