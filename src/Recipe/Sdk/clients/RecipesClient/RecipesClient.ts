import { ApiClient } from "packages/ApiClient";
import { Recipe, RecipeAllParams, RecipeStats, SerializedRecipe } from "@recipe/Sdk/models";
import Promise from 'bluebird';

export class RecipesClient {
    constructor(public apiClient: ApiClient) {}

    async all(recipeAllParams?: RecipeAllParams): Promise<Recipe[]> {
        return this.apiClient.get<SerializedRecipe[]>('/data/recipes/all.json', recipeAllParams)
            .then(({ data }) => data.map(Recipe.createFromResponse));
    }

    async get(recipeId: string): Promise<Recipe> {
        return this.apiClient.get<SerializedRecipe>(`/data/recipes/${recipeId}.json`)
            .then(({ data }) => Recipe.createFromResponse(data));
    }

    async stats(): Promise<RecipeStats> {
        return this.apiClient.get<RecipeStats>('/data/recipes/stats.json')
            .then(({ data}) => data);
    }
}