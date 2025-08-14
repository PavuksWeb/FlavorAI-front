import { Recipe } from '@/types/recipe.t';
import { api } from '../axios';

export async function getRecipeById(id: number): Promise<Recipe | undefined> {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
}
