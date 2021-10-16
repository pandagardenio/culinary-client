import { RecipeIngredient, SerializedRecipeIngredient } from "./RecipeIngredient";

export type RecipeStepDuration = {
    preparation: number;
    total: number;
}

export type SerializedRecipeStep = {
    name?: string;
    description: string;
    ingredients: SerializedRecipeIngredient[];
    duration: RecipeStepDuration;
}

export class RecipeStep {
    static createFromResponse(response: SerializedRecipeStep): RecipeStep {
        return new RecipeStep(
            response.description,
            response.ingredients.map(RecipeIngredient.createFromResponse),
            response.duration,
            response.name
        );
    }

    constructor(
        private description: string,
        private ingredients: RecipeIngredient[],
        private duration: RecipeStepDuration,
        private name?: string
    ) {}

    getDescription() {
        return this.description;
    }

    getIngredients() {
        return this.ingredients;
    }

    getDuration() {
        return this.duration;
    }

    getName() {
        return this.name;
    }

    serialize(): SerializedRecipeStep {
        return {
            name: this.name,
            description: this.description,
            ingredients: this.ingredients.map(ingredient => ingredient.serialize()),
            duration: this.duration
        };
    }

    toJSON(): SerializedRecipeStep {
        return this.serialize();
    }
}