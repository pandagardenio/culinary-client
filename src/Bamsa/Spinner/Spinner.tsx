import React from 'react';

export type SpinnerProps = {};

export const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps): JSX.Element => {
    return (
        <div {...props}>Loading...</div>
    );
}