import { RecipeIngredient } from "./RecipeIngredient";
import { RecipeMetadata } from "./RecipeMetadata";
import { RecipeStep, RecipeStepDuration, SerializedRecipeStep } from "./RecipeStep";

export type SerializedRecipe = {
    id: string;
    name: string;
    description: string;
    steps: SerializedRecipeStepType[];
    metadata: RecipeMetadata;
}

export type SerializedRecipeStepType = SerializedRecipeStep | SerializedRecipe;
export type RecipeStepType = RecipeStep | Recipe;

export class Recipe {
    static createFromResponse(response: SerializedRecipe): Recipe {
        return new Recipe(
            response.id,
            response.name,
            response.description,
            response.steps.map(
                serializedRecipeStep => (serializedRecipeStep as SerializedRecipe).id ?
                    Recipe.createFromResponse(serializedRecipeStep as SerializedRecipe) :
                    RecipeStep.createFromResponse(serializedRecipeStep as SerializedRecipeStep)
            ),
            response.metadata
        );
    }

    constructor(
        private id: string,
        private name: string,
        private description: string,
        private steps: RecipeStepType[],
        private metadata: RecipeMetadata
    ) {}

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getDuration(): RecipeStepDuration {
        return this.steps.reduce((duration: RecipeStepDuration, step) => {
            const stepDuration = step.getDuration();
            if (step instanceof Recipe) {
                return {
                    preparation: duration.preparation + stepDuration.preparation,
                    total: duration.total + stepDuration.total
                }
            }
            return {
                preparation: duration.preparation + stepDuration.preparation,
                total: duration.total + stepDuration.total
            }
        }, {
            preparation: 0,
            total: 0
        });
    }

    getIngredients(): RecipeIngredient[] {
        return this.steps.reduce((ingredients: RecipeIngredient[], step) => {
            ingredients.push(...step.getIngredients());
            return ingredients;
        }, []);
    }

    getMetadata(): RecipeMetadata {
        return this.metadata;
    }

    getSteps(): RecipeStepType[] {
        return this.steps;
    }

    serialize(): SerializedRecipe {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            steps: this.steps.map(step => step.serialize()),
            metadata: this.metadata
        };
    }

    toJSON(): SerializedRecipe {
        return this.serialize();
    }
}