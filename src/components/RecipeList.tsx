'use client';

import RecipeCard from './RecipeCard';
import { useEffect, useState } from 'react';
import { Recipe } from '@/types/recipe';
import { getAllRecipes } from '@/api/recipes/getAllRecipes';

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes();
      setRecipes(data ? data : []);
    };
    fetchData();
  }, []);

  if (!recipes || !recipes.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 dark:border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="px-4 py-18 max-w-7xl mx-auto">
      <h1 className="text-4xl mb-10">All Recipes</h1>
      <div className="grid grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard {...recipe} key={recipe.id} />
        ))}
      </div>
    </section>
  );
}
