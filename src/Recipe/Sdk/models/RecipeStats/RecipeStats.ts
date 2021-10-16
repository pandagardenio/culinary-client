import { RecipeMetadata } from "@recipe/Sdk"
export type RecipeStatsKey = RecipeMetadata['type'];
export type RecipeStats = Record<RecipeStatsKey, number>

export const getRecipeStatsCount = (recipeStats: RecipeStats): number =>
    Object.keys(recipeStats).reduce((count: number, recipeStatsKey: string) => {
        return count + recipeStats[recipeStatsKey as RecipeStatsKey];
    }, 0);