import { Card, CardContent } from '@pandagardenio/bamsa/Card';
import { Grid } from '@pandagardenio/bamsa/Grid';
import React from 'react';

import { Recipe as RecipeModel } from '@recipe/Sdk';
import { Recipe } from '../Recipe';

export type RecipeListProps = {
    recipes: RecipeModel[];
}

export const RecipeList: React.FC<RecipeListProps> = ({
    recipes
}: RecipeListProps): JSX.Element => {
    return (
        <Grid container spacing={2}>
            {recipes.map((recipe: RecipeModel) => (
                <Grid item xs={12} key={recipe.getId()}>
                    <Card>
                        <CardContent>
                            <Recipe recipe={recipe}/>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};