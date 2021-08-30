import React from 'react';

import { ApiClientContext } from './ApiClientContext';
import { ApiClient } from './ApiClient';

export type ApiClientProviderProps = {
    children: React.ReactNode;
    apiClient: ApiClient;
};

export const ApiClientProvider: React.FC<ApiClientProviderProps> = ({
    children,
    apiClient,
}: ApiClientProviderProps): JSX.Element => {
    return (
        <ApiClientContext.Provider value={apiClient}>{children}</ApiClientContext.Provider>
    );
};