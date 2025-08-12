import { api } from '../axios';

export async function getAllRecipes() {
  try {
    const response = await api.get('/recipes');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
