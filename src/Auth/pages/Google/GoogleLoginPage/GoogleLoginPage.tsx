import React from 'react';
import { useEffect } from 'react';


import { useConfig } from '../../../../Config';
import { useApiClient } from '../../../../ApiClient';
import { Spinner } from '../../../../Bamsa';
import { GoogleAuthClient } from '../../../Sdk/clients';

export const GoogleLoginPage: React.FC = (): JSX.Element => {
    const config = useConfig();
    const googleAuthSdk = new GoogleAuthClient(useApiClient(), config.auth.google);

    useEffect(() => { googleAuthSdk.getCredentials(); });

    return (
        <Spinner/>
    );
};