import { Recipe } from '@/types/recipe';
import { api } from '../axios';

export async function getAllRecipes(): Promise<Recipe[] | undefined> {
  try {
    const response = await api.get('/recipes');
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
