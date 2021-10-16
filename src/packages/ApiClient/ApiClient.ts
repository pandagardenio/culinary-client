import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import Promise from 'bluebird';

import { ApiClientConfig } from './ApiClientConfig';

Promise.config({
    cancellation: true,
    warnings: false
});

export enum ApiClientRequestMethod {
    DELETE = 'DELETE',
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT'
}


export type ApiClientResponse<T> = AxiosResponse<T>;
export type ApiClientError<T> = AxiosError<T>;

export class ApiClient {
    client: AxiosInstance;

    constructor(
        private config: ApiClientConfig,
        private authToken?: string
    ) {
        this.client = this.createClient(
            this.config.baseUrl,
            this.authToken
        );
    }

    get<T>(
        endpoint: string,
        params?: object,
        headers?: Record<string, string>,
        paramsSerializer?: (params: object) => string
    ): Promise<ApiClientResponse<T>> {
        return this.request<T>(
            ApiClientRequestMethod.GET,
            endpoint,
            params,
            undefined,
            headers,
            paramsSerializer
        );
    }

    delete<T>(
        endpoint: string,
        params?: object,
        headers?: Record<string, string>
    ): Promise<ApiClientResponse<T>> {
        return this.request<T>(
            ApiClientRequestMethod.DELETE,
            endpoint,
            params,
            undefined,
            headers
        );
    }

    post<T>(
        endpoint: string,
        body?: object,
        params?: object,
        headers?: Record<string, string>
    ): Promise<ApiClientResponse<T>> {
        return this.request<T>(
            ApiClientRequestMethod.POST,
            endpoint,
            params,
            body,
            headers
        );
    }

    put<T>(
        endpoint: string,
        body?: any,
        params?: object,
        headers?: Record<string, string>
    ): Promise<ApiClientResponse<T>> {
        return this.request<T>(
            ApiClientRequestMethod.PUT,
            endpoint,
            params,
            body,
            headers
        );
    }

    getAuthorization(): string | undefined {
        return this.authToken;
    }

    setAuthorization(authToken?: string): void {
        this.authToken = authToken;

        if (authToken) {
            this.client.defaults.headers.common.Authorization = `Bearer ${authToken}`;
        } else {
            delete this.client.defaults.headers.common.Authorization;
        }
    }

    private request<T>(
        method: ApiClientRequestMethod,
        url: string,
        params?: object,
        data?: object,
        headers?: Record<string, string>,
        paramsSerializer?: (params: object) => string
    ): Promise<ApiClientResponse<T>> {
        const cancelTokenSource = axios.CancelToken.source();
        const requestConfig: AxiosRequestConfig = {
            cancelToken: cancelTokenSource.token,
            data,
            headers,
            method,
            params,
            paramsSerializer,
            url
        };

        return new Promise<ApiClientResponse<T>>((
            resolve: (value?: ApiClientResponse<T> | PromiseLike<ApiClientResponse<T>>) => void,
            reject: (reason?: any) => void,
            onCancel?: (callback: () => void) => void
        ): void  => {
            this.client.request<T>(requestConfig)
                .then(resolve)
                .catch(reject);
            onCancel && onCancel(() => {
                cancelTokenSource.cancel();
            });
        });
    }

    private createClient(apiUrl: string, authToken?: string): AxiosInstance {
        const baseURL = apiUrl.charAt(apiUrl.length - 1) === '/' ? apiUrl : `${apiUrl}/`;
        const client = axios.create({ baseURL });

        client.defaults.headers.common['Content-Type'] = 'application/json';
        client.defaults.headers.common.Authorization = `Bearer ${authToken}`;

        client.interceptors.response.use((response: ApiClientResponse<any>) => {
            return response;
        }, (error: AxiosError<any>) => {
            if ('401' === error.code) {
                PubSub.publish('auth::delete', null);
            } else {
                return Promise.reject(error);
            }
        });
        return client;
    }
}