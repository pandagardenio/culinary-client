import { RecipeStats, RecipeStatsKey } from '@recipe/Sdk';
import React from 'react';
import { RecipesMenuElement } from './RecipesMenuElement';

export type RecipesMenuProps = {
    stats: RecipeStats;
};

export const RecipesMenu: React.FC<RecipesMenuProps> = ({
    stats
}: RecipesMenuProps): JSX.Element => {
    return (
        <ul>
            <li>
                Recipe Type
            </li>
            {Object.keys(stats).map((statKey) => (
                <li key={statKey}>
                    <RecipesMenuElement name={statKey} count={stats[statKey as RecipeStatsKey]}/>
                </li>
            ))}
            <li>Recipe Age</li>

        </ul>
    );
}