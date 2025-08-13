'use client';

import { getRecipeById } from '@/api/recipes/getRecipeById';
import RecipeDetails from '@/components/RecipeDetails';
import { Recipe } from '@/types/recipe';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RecipeDetailsPage() {
  const router = useParams();
  const id = Number(router.recipe);

  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (!id) {
      console.error("There is no recipe's id");
    }

    async function fetchRecipe() {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 dark:border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return <RecipeDetails {...recipe} />;
}
