import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RecipeMetadataType } from '@recipe/Sdk/models/Recipe';
import { RootState } from 'store';

export type RecipeState = {
    filters: {
        type: Record<RecipeMetadataType, boolean>
    };
}

const initialState: RecipeState = {
    filters: {
        type: {
            dish: true,
            sauce: true,
            salad_dressing: true,
            cooking_base: true
        }
    }
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        toggleRecipeTypeFilter: (state, action: PayloadAction<RecipeMetadataType>) => {
            state.filters.type[action.payload] = !state.filters.type[action.payload];
        }
    }
});

export const { toggleRecipeTypeFilter } = recipeSlice.actions

export const getRecipeTypeFilters = (state: RootState) => state.recipe.filters;
export const isRecipeTypeFilterOn = (recipeType: RecipeMetadataType) =>
    (state: RootState) => state.recipe.filters.type[recipeType];