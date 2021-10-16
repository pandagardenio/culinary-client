import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from './Path';
import { GoogleLoginPage, GoogleLoginCallbackPage, LoginPage } from '../pages';
import { OnLoginSuccessProps } from '../definitions';

export type RouterProps = OnLoginSuccessProps & {
    routes?: Partial<typeof Routes>
}

export const Router: React.FC<RouterProps> = (
    { onLoginSuccess, routes }: RouterProps
): JSX.Element => {
    const calculatedRoutes = {
        ...Path,
        ...routes
    };

    return (
        <>
            <Route path={calculatedRoutes.LOGIN} element={<LoginPage/>}/>
            <Route path={calculatedRoutes.GOOGLE_LOGIN_CALLBACK} element={<GoogleLoginCallbackPage onLoginSuccess={onLoginSuccess}/>}/>
            <Route path={calculatedRoutes.GOOGLE_LOGIN} element={<GoogleLoginPage/>}/>
            <Route path={calculatedRoutes.HOME}>
                <Navigate to={calculatedRoutes.LOGIN}/>
            </Route>
            <Route path={calculatedRoutes.GOOGLE}>
                <Navigate to={calculatedRoutes.GOOGLE_LOGIN}/>
            </Route>
            <Navigate to={calculatedRoutes.LOGIN}/>
        </>
    );
};
