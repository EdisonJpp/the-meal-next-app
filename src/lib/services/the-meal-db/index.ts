import { http } from '@/lib/http';
import { ICategory, IMeal } from '@/lib/types/the-meal-db.types';

/**
 * @descriptions : get all categories
 */
export async function getCategories() {
  const { data } = await http.get<{ categories: ICategory[] }>(
    '/the-meal-db/categories'
  );
  return data.categories;
}

/**
 * @descriptions : get four meal random
 */
export async function getFourRandomMeals() {
  const promises = [...Array(4)].map(() => {
    return http.get<{ meal: IMeal }>('/the-meal-db/meal-random');
  });

  const resolved = await Promise.all(promises);
  return resolved.map((item) => item.data.meal);
}

/**
 * @descriptions : get four meal random
 */
export async function searchMeals(param = 'e') {
  const { data } = await http.get<{ meals: IMeal[] }>(
    `/the-meal-db/search?s=${param}`
  );
  return data.meals;
}

/**
 *
 * @param strCategory : category name
 * @returns : meals
 */
export async function filterMealsByCategory(strCategory: string) {
  const { data } = await http.get<{ meals: IMeal[] }>(
    `/the-meal-db/meals-by-category?c=${strCategory}`
  );
  return data.meals;
}

/**
 *
 * @param id : meal id
 * @returns : meal
 */
export async function getMeal(id: string) {
  const { data } = await http.get<{ meal: IMeal }>(
    `/the-meal-db/meal-detail/${id}`
  );
  return data;
}
