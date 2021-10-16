import { AppRouter } from '@pandagardenio/app-router';
import { App as BaseApp } from '@pandagardenio/app';
import React from 'react';

import { store } from '../store';
import { useRoutes } from '@recipe/Router';

export const App: React.FC = (): JSX.Element => {
    return (
        <BaseApp store={store}>
            <AppRouter routes={useRoutes()}/>
        </BaseApp>
    )
}