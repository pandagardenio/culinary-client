import { Button } from '@pandagardenio/bamsa/Button';
import { RecipeMetadataType } from '@recipe/Sdk';
import { isRecipeTypeFilterOn, toggleRecipeTypeFilter } from '@recipe/store';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

export type RecipesMenuElementProps = {
    name: string;
    count: number;
}

export const RecipesMenuElement: React.FC<RecipesMenuElementProps> = ({
    name, count
}): JSX.Element => {
    const dispatch = useAppDispatch();
    const isElementSelected = useAppSelector(isRecipeTypeFilterOn(name as RecipeMetadataType));
    const onClick = (): void => {
        dispatch(toggleRecipeTypeFilter(name as RecipeMetadataType));
    };

    const color = isElementSelected ? 'success' : 'primary';
    return (
        <Button onClick={onClick} color={color} variant="text">{name}: {count}</Button>
    );
}