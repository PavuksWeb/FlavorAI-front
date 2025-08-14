import { Rating } from './rating.t';

export type Recipe = {
  id: number;
  title: string;
  image: string | null;
  description: string | null;
  ingredients: string[];
  instructions: string;
  authorId: number;
  ratings?: Rating[];
  createdAt: Date;
};
