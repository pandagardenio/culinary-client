import { Recipe } from '@recipe/components';
import { Recipe as RecipeModel, RecipeStep as RecipeStepModel } from '@recipe/Sdk';
import { formatSeconds } from '@pandagardenio/utils/time';
import React from 'react';

export type RecipeStepProps = {
    step: RecipeStepModel | RecipeModel;
}

export const RecipeStep: React.FC<RecipeStepProps> = ({
    step
}): JSX.Element => {
    const duration = step.getDuration();
    if (step instanceof RecipeModel) {
        return (
            <Recipe recipe={step}/>
        )
    }
    return (
        <>
            <h3>{step.getName()}</h3>
            <h4>Preparation: {formatSeconds(duration.preparation)} Total: {formatSeconds(duration.total)}</h4>
            <p>{step.getDescription()}</p>
        </>
    );
}