import { RecipeIngredient as RecipeIngredientModel } from '@recipe/Sdk';
import React from 'react';
import { RecipeIngredient } from '../RecipeIngredient';

export type RecipeIngredientsProps = {
    ingredients: RecipeIngredientModel[];
}

export const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({
    ingredients
}): JSX.Element => {
    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <RecipeIngredient ingredient={ingredient}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}