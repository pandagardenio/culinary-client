import { RecipeIngredient as RecipeIngredientModel } from '@recipe/Sdk';
import React from 'react';

export type RecipeIngredientProps = {
    ingredient: RecipeIngredientModel
}

export const RecipeIngredient: React.FC<RecipeIngredientProps> = ({
    ingredient
}): JSX.Element => {
    return (
        <>
            {ingredient.getName()}: {ingredient.getQuantity()} {ingredient.getParsedUnit()}
        </>
    );
}