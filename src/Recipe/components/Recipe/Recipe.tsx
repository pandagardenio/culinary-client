import { styled } from '@mui/material/styles';
import { Card, CardContent } from '@pandagardenio/bamsa/Card';
import { Grid } from '@pandagardenio/bamsa/Grid';
import { formatSeconds } from '@pandagardenio/utils/time';
import { Recipe as RecipeModel } from '@recipe/Sdk';
import React from 'react';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeSteps } from './RecipeSteps';
import { getRecipeStyles } from './RecipeStyles';

export type RecipeProps = {
    recipe: RecipeModel;
}

type RecipeContainerProps = React.PropsWithChildren;

const RecipeContainer = styled(({ children }: RecipeContainerProps ) => (
    <Grid container justifyContent="space-between" spacing={2}>
        {children}
    </Grid>
))(({ theme }) => ({
    padding: theme.spacing(2)
}));

export const Recipe: React.FC<RecipeProps> = ({
    recipe
}: RecipeProps): JSX.Element => {
    const duration = recipe.getDuration();
    return (
        <RecipeContainer>
            <Grid item xs="auto">
                <h2>{recipe.getName()}</h2>
                <h3>Preparation: {formatSeconds(duration.preparation)} Total: {formatSeconds(duration.total)}</h3>
                <p>{recipe.getDescription()}</p>
            </Grid>
            <Grid item xs="auto">
                <Card style={{ width: 320 }}>
                    <CardContent>
                        <RecipeIngredients ingredients={recipe.getIngredients()}/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <RecipeSteps steps={recipe.getSteps()}/>
            </Grid>
        </RecipeContainer>
    );
}