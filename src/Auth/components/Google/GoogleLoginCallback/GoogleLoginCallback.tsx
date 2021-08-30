import React, { useEffect } from 'react';

import { useConfig } from '../../../../Config';
import { GoogleAuthClient, GoogleLoginParams } from '../../../Sdk/clients';
import { useApiClient } from '../../../../ApiClient';
import { Spinner } from '../../../../Bamsa';
import { OnLoginSuccessProps } from '../../../definitions';
import { Auth } from '../../../Sdk';

export type GoogleLoginCallbackProps = OnLoginSuccessProps;

export const GoogleLoginCallback: React.FC<GoogleLoginCallbackProps> = (
    { onLoginSuccess }: GoogleLoginCallbackProps
): JSX.Element => {
    const config = useConfig();
    const googleAuthSdk = new GoogleAuthClient(useApiClient(), config.auth.google);

    const getGoogleLoginParamsFromSearchParams = (): GoogleLoginParams => {
        const searchParams = new URLSearchParams(document.location.search);
        return {
            code: searchParams.get('code') as string,
            scope: searchParams.get('scope') as string,
            authuser: searchParams.get('authuser') as string,
            hd: searchParams.get('hd') as string,
            prompt: searchParams.get('prompt') as string
        };
    };

    useEffect(() => {
        googleAuthSdk.login(getGoogleLoginParamsFromSearchParams())
            .then((auth: Auth) => { onLoginSuccess(auth) });
    });

    return (
        <Spinner/>
    );
}