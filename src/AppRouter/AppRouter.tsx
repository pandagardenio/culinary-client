import React from 'react';
import {
    BrowserRouter, Route, Switch, useHistory,
} from "react-router-dom";

import { Router as AuthRouter } from '@auth/Router';
import { Auth } from '@auth/Sdk';
import { AppRoutes } from './AppRoutes';

export const AppRouter: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={AppRoutes.HOME}>
                    <div>Hola</div>
                </Route>
                <AppRouterComponents/>
            </Switch>
        </BrowserRouter>
    )
}

const AppRouterComponents: React.FC = (): JSX.Element => {
    const history = useHistory();

    const onLoginSuccess = (auth: Auth) => {
        history.push(AppRoutes.USER_HOME);
    };

    return (
        <AuthRouter onLoginSuccess={onLoginSuccess}/>
    );
}