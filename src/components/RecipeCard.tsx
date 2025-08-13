import { Recipe } from '@/types/recipe';
import Image from 'next/image';
import Link from 'next/link';

export default function RecipeCard(recipe: Recipe) {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <article className="rounded-lg border-neutral-700 border overflow-hidden hover:bg-neutral-800 hover:cursor-pointer transition duration-400">
        <div className="relative w-full h-54">
          <Image
            src={String(recipe.image)}
            fill
            sizes="300"
            alt={recipe.title}
            quality={80}
            placeholder="blur"
            blurDataURL="/placeholder.webp"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 p-6">
          <header className="text-2xl">{recipe.title}</header>
          <span className="text-lg">{recipe.description}</span>
          <span>{`${recipe.ingredients.length} ingredients`}</span>
          <p>{recipe.instructions}</p>
        </div>
      </article>
    </Link>
  );
}
