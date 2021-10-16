import { RecipeListPage } from '@recipe/pages';
import { UseRoutes } from '@pandagardenio/app-router';

import { Path } from './Path';

export const useRoutes: UseRoutes = () => [{
    path: Path.LIST,
    Element: RecipeListPage
}];
