import { Recipe } from '@/types/recipe.t';
import Image from 'next/image';

export default function RecipeDetails(recipe: Recipe) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex gap-12">
        <div className="relative w-auto h-120 mb-6">
          <Image
            src={String(recipe.image)}
            placeholder="blur"
            blurDataURL="/placeholder.webp"
            alt={recipe.title}
            quality={100}
            width={500}
            height={500}
            className="object-cover rounded-xl overflow-hidden"
          />
        </div>
        <div className="flex-col">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-400 text-xl mb-10">{recipe.description}</p>
          <ul className="flex-col my-4 px-4 text-lg">
            {recipe.ingredients.map((i, index) => (
              <li key={index} className="list-disc mb-2">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-4xl mb-4">How to make</h1>
        <div className="text-xl">{recipe.instructions}</div>
      </div>
    </section>
  );
}
