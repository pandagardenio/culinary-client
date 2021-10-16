import {
    BrowserRouter, Route, Routes,
} from "react-router-dom";

import { AppRoute } from './useRoutes';

export type AppRouterProps = {
    routes: AppRoute[];
};

export function AppRouter({
    routes
}: AppRouterProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ Element, elementProps, ...routeProps }) => (
                    <Route {...routeProps} element={<Element {...elementProps}/>}/>
                ))}
            </Routes>
        </BrowserRouter>
    )
}
