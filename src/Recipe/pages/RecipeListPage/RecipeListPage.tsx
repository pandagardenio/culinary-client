import { Grid } from '@pandagardenio/bamsa/Grid';
import { Dashboard } from '@pandagardenio/dashboard';

import { RecipeList, RecipesSidebar } from '@recipe/components';
import { Recipe as RecipeModel, useRecipesClient } from '@recipe/Sdk';
import { getRecipeTypeFilters } from '@recipe/store';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';

export const RecipeListPage: React.FC = (): JSX.Element => {
    const [recipes, setRecipes] = useState<RecipeModel[]>([]);
    const recipesClient = useRecipesClient();
    const recipeTypeFilters = useAppSelector(getRecipeTypeFilters);
    useEffect(() => {
        recipesClient.all().then((fetchedRecipes: RecipeModel[]) => {
            const recipesToSet = fetchedRecipes
                .filter(recipe => recipeTypeFilters.type[recipe.getMetadata().type]);
            setRecipes(recipesToSet);
        })
    }, [recipesClient, recipeTypeFilters.type]);
    return (
        <Dashboard>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <RecipesSidebar/>
                </Grid>
                <Grid item md={9}>
                    <RecipeList recipes={recipes}/>
                </Grid>
            </Grid>
        </Dashboard>
    )
};