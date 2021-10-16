import { ApiClient } from "packages/ApiClient";
import Promise from 'bluebird';

import { Ingredient, SerializedIngredient } from "@ingredient/Sdk/models";

export class IngredientsClient {
    constructor(public apiClient: ApiClient) {}

    async all(): Promise<Ingredient[]> {
        return this.apiClient.get<SerializedIngredient[]>('/data/ingredients/all.json')
            .then(({ data }) => data.map(Ingredient.createFromResponse));
    }

    async get(ingredientId: string): Promise<Ingredient> {
        return this.apiClient.get<SerializedIngredient>(`/data/ingredients/${ingredientId}.json`)
            .then(({ data }) => Ingredient.createFromResponse(data));
    }
}