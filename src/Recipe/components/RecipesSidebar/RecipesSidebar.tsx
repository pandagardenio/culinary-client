import { Sidebar } from '@pandagardenio/bamsa/Sidebar';
import { RecipeStats as RecipeStatsModel, useRecipesClient } from '@recipe/Sdk';
import React, { useEffect, useState } from 'react';
import { RecipesMenu } from '../RecipesMenu';

export const RecipesSidebar: React.FC = (): JSX.Element => {
    const [stats, setStats] = useState<RecipeStatsModel>();
    const recipesClient = useRecipesClient();

    useEffect(() => {
        recipesClient.stats().then((stats: RecipeStatsModel) => {
            setStats(stats)
        })
    }, [recipesClient]);

    return (
        <Sidebar>
            {stats && <RecipesMenu stats={stats}/>}
        </Sidebar>
    )
}