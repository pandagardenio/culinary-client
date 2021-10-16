import { Ingredient, SerializedIngredient } from "@ingredient/Sdk";
import { RecipeCookingUnit, RecipeUnit } from "./RecipeUnit";

export type SerializedRecipeIngredient = {
    quantity: number;
    unit: RecipeUnit;
} & SerializedIngredient;

export class RecipeIngredient extends Ingredient {
    static createFromResponse(response: SerializedRecipeIngredient): RecipeIngredient {
        return new RecipeIngredient(
            response.id,
            response.name,
            response.description,
            response.quantity,
            response.unit
        );
    }

    constructor(
        protected id: string,
        protected name: string,
        protected description: string,
        private quantity: number,
        private unit: RecipeUnit
    ) {
        super(id, name, description);
    }

    getQuantity(): number {
        return this.quantity;
    }

    getUnit(): RecipeUnit {
        return this.unit;
    }

    getParsedUnit(): string {
        if (this.unit === RecipeCookingUnit.INGREDIENT_NAME) {
            return this.unit.replace(RecipeCookingUnit.INGREDIENT_NAME, this.name);
        }
        return this.unit; 
    }

    serialize(): SerializedRecipeIngredient {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            quantity: this.quantity,
            unit: this.unit
        };
    }
}
