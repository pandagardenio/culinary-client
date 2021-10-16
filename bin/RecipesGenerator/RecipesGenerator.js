const path = require('path');
const RecipeIngredientGenerator = require('./RecipeIngredientGenerator');
const RecipeStepGenerator = require('./RecipeStepGenerator');
const { getAllJsonFiles, mkdirSync, readJsonFile, writeFile } =  require("./utils/fs");

class RecipesGenerator {
    dataPath = path.resolve(__dirname, '../data');
    publicPath = path.resolve(__dirname, '../../public');
    ingredientFilesPath = path.resolve(this.dataPath, './ingredients');
    recipeFilesPath = path.resolve(this.dataPath, './recipes');
    dataIngredientsFilePath = path.resolve(this.publicPath, './data/ingredients');
    dataIngredientsAllFilePath = path.resolve(this.dataIngredientsFilePath, 'all.json');
    dataRecipesFilePath = path.resolve(this.publicPath, './data/recipes');
    dataRecipesAllFilePath = path.resolve(this.dataRecipesFilePath, 'all.json');
    dataRecipesStatsFilePath = path.resolve(this.dataRecipesFilePath, 'stats.json');

    init() {
        this.loadIngredients();
        this.loadRecipes();
        this.writeIngredients();
        this.writeRecipes();
    }

    getIngredientPath(ingredient) {
        return path.resolve(this.dataIngredientsFilePath, `${ingredient.id}.json`);
    }

    getRecipePath(recipe) {
        return path.resolve(this.dataRecipesFilePath, `${recipe.id}.json`);
    }

    loadIngredients() {
        this.ingredients = getAllJsonFiles(this.ingredientFilesPath, [], /.json/);
    }

    loadRecipes() {
        const recipesData = getAllJsonFiles(this.recipeFilesPath, [], /.json/);
        const recipeIngredientGenerator = new RecipeIngredientGenerator(this.ingredients);
        const recipeStepGenerator = new RecipeStepGenerator(recipesData, recipeIngredientGenerator);
        this.recipes = recipesData.map(recipeData => ({
            ...recipeData,
            steps: recipeData.steps.map(recipeStep => recipeStepGenerator.resolve(recipeStep))
        }));
    }

    writeRecipes() {
        this.writeRecipesDir()
        this.writeRecipesStats();
        this.writeRecipesAll();
        this.recipes.forEach(this.writeRecipe.bind(this));
    }

    writeRecipesDir() {
        mkdirSync(this.dataRecipesFilePath, { recursive: true });
    }

    writeRecipesStats() {
        const stats = this.recipes.reduce((partialStats, recipe ) => {
            let stat = partialStats[recipe.metadata.type] || 0;
            stat++;
            return {
                ...partialStats,
                [recipe.metadata.type]: stat
            }
        }, {});
        writeFile(this.dataRecipesStatsFilePath, JSON.stringify(stats));
    }

    writeRecipe(recipe) {
        writeFile(this.getRecipePath(recipe), JSON.stringify(recipe));
    }

    writeRecipesAll() {
        writeFile(this.dataRecipesAllFilePath, JSON.stringify(this.recipes))
    }

    writeIngredients() {
        this.writeIngredientsDir()
        this.writeIngredientsAll();
        this.ingredients.forEach(this.writeIngredient.bind(this));
    }

    writeIngredientsDir() {
        mkdirSync(this.dataIngredientsFilePath, { recursive: true });
    }

    writeIngredient(ingredient) {
        writeFile(this.getIngredientPath(ingredient), JSON.stringify(ingredient));
    }

    writeIngredientsAll() {
        writeFile(this.dataIngredientsAllFilePath, JSON.stringify(this.ingredients))
    }
}

module.exports = RecipesGenerator;