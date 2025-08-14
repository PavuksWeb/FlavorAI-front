import { Recipe } from '@/types/recipe.t';
import { api } from '@/api/axios';

export async function getAllRecipes(): Promise<Recipe[] | undefined> {
  const response = await api.get('/recipes');
  return response.data;
}
