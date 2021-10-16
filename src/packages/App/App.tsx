import { CssBaseline } from '@pandagardenio/bamsa/CssBaseline';
import { Store } from '@reduxjs/toolkit';
import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux'

import { ApiClientProvider, createApiClient } from '../ApiClient';
import { useConfig } from '../../Config';

export type AppProps = PropsWithChildren<{
    store: Store;
}>;

export function App({
    children,
    store
}: AppProps): JSX.Element {
    const config = useConfig();
    const apiClient = createApiClient(config.apiClient);
    return (
        <CssBaseline>
            <ReduxProvider store={store}>
                <ApiClientProvider apiClient={apiClient}>
                    {children}
                </ApiClientProvider>
            </ReduxProvider>
        </CssBaseline>
    );
};

export default App;
