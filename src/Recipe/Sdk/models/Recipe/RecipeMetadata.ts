export type RecipeMetadata = {
    country: string[];
    diet: 'omnivorous' | 'vegetarian' | 'vegan';
    allergiesFree: 'gluten_free' | 'lactose_free' | 'nuts_free'[];
    type: 'recipe' | 'cooking_base' | 'sauce' | 'salad_dressing';
}
