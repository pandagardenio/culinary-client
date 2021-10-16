export type RecipeUnit = RecipeMetricUnit | RecipeCookingUnit;

export enum RecipeMetricUnit {
    GRAMES = 'g',
    KILOGRAMES = 'kg',
    MILILITRES = 'ml',
    LITRES = 'l'
}

export enum RecipeCookingUnit {
    CLOVER = 'clover',
    INGREDIENT_NAME = 'ingredient_name',
    CUP = 'cup',
    SPOON = 'spoon'
}