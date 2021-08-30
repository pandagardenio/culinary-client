import React from 'react';

import { GoogleLoginCallback } from '../../../components';
import { OnLoginSuccessProps } from '../../../definitions';

export type GoogleLoginCallbackPageProps = OnLoginSuccessProps;

export const GoogleLoginCallbackPage: React.FC<GoogleLoginCallbackPageProps> = (
    props: GoogleLoginCallbackPageProps
): JSX.Element => {
    return (
        <GoogleLoginCallback {...props}/>
    );
};