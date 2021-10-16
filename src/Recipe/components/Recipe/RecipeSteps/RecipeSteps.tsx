import { Recipe as RecipeModel, RecipeStep as RecipeStepModel } from '@recipe/Sdk';
import React from 'react';
import { RecipeStep } from '../RecipeStep';

export type RecipeStepsProps = {
    steps: Array<RecipeStepModel | RecipeModel>
}

export const RecipeSteps: React.FC<RecipeStepsProps> = ({
    steps
}): JSX.Element => {

    return (
        <ol>
            {steps.map((step, index) => (
                <li key={index}>
                    <RecipeStep step={step}/>
                </li>
            ))}
        </ol>
    );
}