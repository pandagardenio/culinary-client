import { useContext } from 'react';

import { ApiClient } from './ApiClient';
import { ApiClientContext } from './ApiClientContext';

export const useApiClient = (): ApiClient => {
    const context = useContext(ApiClientContext);
    if (!context) {
        throw new Error('Wrap your Component in a ApiClientProvider Component');
    }
    return context as ApiClient;
};