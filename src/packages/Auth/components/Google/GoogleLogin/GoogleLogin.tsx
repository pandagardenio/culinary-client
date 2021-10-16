import React from "react"

import { useApiClient } from '@pandagardenio/api-client';
import { GoogleAuthClient } from '@pandagardenio/auth/Sdk/clients';
import { Button } from '@pandagardenio/bamsa/Button';
import { useConfig } from '@config/useConfig';

export const GoogleLogin: React.FC = (): JSX.Element => {
    const config = useConfig();
    const googleAuthSdk = new GoogleAuthClient(useApiClient(), config.auth.google);

    const startGoogleLogin = () => { googleAuthSdk.getCredentials(); };

    return (
        <div>
            <Button onClick={startGoogleLogin}>Sign in with Google</Button>
        </div>
    );
};