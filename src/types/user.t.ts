import { Rating } from './rating.t';
import { Recipe } from './recipe.t';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  recipes?: Recipe[];
  ratings?: Rating[];
};
