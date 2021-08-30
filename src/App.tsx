import React from 'react';

import { ApiClientProvider, createApiClient } from './ApiClient';
import { useConfig } from './Config';
import { AppRouter } from './AppRouter';

export const App: React.FC = () => {
    const config = useConfig();
    const apiClient = createApiClient(config.apiClient);
    return (
        <ApiClientProvider apiClient={apiClient}>
            <AppRouter/>
        </ApiClientProvider>
    );
};

export default App;
