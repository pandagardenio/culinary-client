import { AxiosResponse } from "axios";

import { ApiClient } from "@pandagardenio/api-client";
import { Path } from "../../../../Router";
import { Auth, AuthType } from "../../../models";

export type GoogleAuthOptions = {
    clientId: string;
}

export type GoogleLoginParams = {
    code: string;
    scope: string;
    authuser: string;
    hd: string;
    prompt: string;
}

export class GoogleAuthClient {
    constructor(
        private apiClient: ApiClient,
        private options: GoogleAuthOptions
    ) {}

    getCredentials(): void {
        window.location.assign(this.getAuthUrl());
    }

    async login(googleLoginParams: GoogleLoginParams): Promise<Auth> {
        return this.apiClient.get<AuthType>('/auth/google/callback', googleLoginParams)
            .then(({ data }: AxiosResponse<AuthType>) => Auth.createFromResponse(data));
    }

    private getAuthUrl(): string {
        return `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=${encodeURIComponent('email profile')}&redirect_uri=${this.getRedirectUrl()}&client_id=${this.options.clientId}`;
    }

    private getRedirectUrl() {
        return `${window.location.origin}${Path.GOOGLE_LOGIN_CALLBACK}`;
    }
}