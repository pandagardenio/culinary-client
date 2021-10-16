class RecipeIngredientGenerator {
    constructor(
        ingredients
    ) {
        this.ingredients = ingredients;
    }

    resolve(recipeIngredientData) {
        const recipeIngredient = recipeIngredientData.ingredientId ?
            this.resolveIngredientReference(recipeIngredientData.ingredientId) :
            recipeIngredientData;
    
        return {
            ...recipeIngredientData,
            name: recipeIngredient.name,
            description: recipeIngredient.description
        };
    }

    resolveIngredientReference(ingredientId) {
        return this.ingredients.find(({ id }) => id === ingredientId);
    }
}

module.exports = RecipeIngredientGenerator;