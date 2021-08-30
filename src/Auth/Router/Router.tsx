import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Routes } from './Routes';
import { GoogleLoginPage, GoogleLoginCallbackPage, LoginPage } from '../pages';
import { OnLoginSuccessProps } from '../definitions';

export type RouterProps = OnLoginSuccessProps & {
    routes?: Partial<typeof Routes>
}

export const Router: React.FC<RouterProps> = (
    { onLoginSuccess, routes }: RouterProps
): JSX.Element => {
    const calculatedRoutes = {
        ...Routes,
        ...routes
    };

    return (
        <>
            <Switch>
                <Route path={calculatedRoutes.LOGIN} exact>
                    <LoginPage/>
                </Route>
                <Route exact path={calculatedRoutes.GOOGLE_LOGIN_CALLBACK}>
                    <GoogleLoginCallbackPage onLoginSuccess={onLoginSuccess}/>
                </Route>
                <Route exact path={calculatedRoutes.GOOGLE_LOGIN}>
                    <GoogleLoginPage/>
                </Route>
                <Redirect exact from={calculatedRoutes.HOME} to={calculatedRoutes.LOGIN}/>
                <Redirect exact from={calculatedRoutes.GOOGLE} to={calculatedRoutes.GOOGLE_LOGIN}/>
            </Switch>
        </>
    );
};
