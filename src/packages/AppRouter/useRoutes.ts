import React from "react";
import { RouteProps } from '@pandagardenio/app-router';

export type AppRoute<T = {}> = RouteProps & {
    Element: React.ElementType<T>;
    elementProps?: T;
}

export type UseRoutes<T = {}> = () => Array<AppRoute<T>>;