import { createContext } from 'react';

import { ApiClient } from './ApiClient';

export const ApiClientContext = createContext<ApiClient | null>(null);