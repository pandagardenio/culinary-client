export type RecipeMetadataDiet = RecipeMetadata['diet'];
export type RecipeMetadataType = RecipeMetadata['type'];

export type RecipeMetadata = {
    diet: 'omnivorous' | 'vegetarian' | 'vegan';
    type: 'dish' | 'cooking_base' | 'sauce' | 'salad_dressing';
}
