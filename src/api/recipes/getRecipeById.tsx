import { api } from '../axios';

export async function getRecipeById(id: number) {
  try {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
