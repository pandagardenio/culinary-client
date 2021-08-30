/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly REACT_APP_LOCALLY_API_URL: 'string';
        readonly REACT_APP_LOCALLY_GOOGLE_CLIENT_ID: 'string';
    }
}