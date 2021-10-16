class RecipeStepGenerator {
    constructor(
        recipes,
        recipeIngredientGenerator
    ) {
        this.recipes = recipes,
        this.recipeIngredientGenerator = recipeIngredientGenerator;
    }

    resolve(recipeStepData) {
        const isRecipe = !!recipeStepData.recipeId;
        if (isRecipe) {
            return this.resolveRecipeReference(recipeStepData.recipeId);
        }

        return {
            ...recipeStepData,
            ingredients: this.resolveRecipeStepIngredients(recipeStepData.ingredients)
        };
    }

    resolveRecipeReference(recipeId) {
        const recipe = this.recipes.find(({ id }) => id === recipeId);
        return {
            ...recipe,
            steps: recipe.steps.map(recipeStep => this.resolve(recipeStep))
        };
    }

    resolveRecipeStepIngredients(recipeIngredients = []) {
        return recipeIngredients.map(recipeIngredientData => this.recipeIngredientGenerator.resolve(recipeIngredientData))
    }
}

module.exports = RecipeStepGenerator;