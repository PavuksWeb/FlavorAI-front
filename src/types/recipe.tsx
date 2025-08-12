export type Recipe = {
  id: number;
  title: string;
  image: string | null;
  description: string | null;
  ingredients: string[];
  instructions: string;
  authorId: number;
  createdAt: Date;
};
