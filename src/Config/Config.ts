import { ApiClientConfig } from "../packages/ApiClient";
import { AuthConfig } from "../packages/Auth/Config";

export type Config = {
    auth: AuthConfig;
    apiClient: ApiClientConfig;
}

export const config: Config = {
    apiClient: {
        // baseUrl: process.env.REACT_APP_LOCALLY_API_URL
        baseUrl: 'http://localhost:3000'
    },
    auth:{
        google: {
            clientId: process.env.REACT_APP_LOCALLY_GOOGLE_CLIENT_ID
        }
    }
};