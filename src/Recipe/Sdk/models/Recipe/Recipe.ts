import { RecipeMetadata } from "./RecipeMetadata";

export type RecipeStep = {
    title: string;
    description: string;
    ingredients: string[];
}

export type Recipe = {
    id: string;
    name: string;
    description: string;
    steps: RecipeStep[];
    ingredients: string[];
    metadata: RecipeMetadata;
}