import React from 'react';

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest}: ButtonProps): JSX.Element => {
    return (
        <button {...rest}>{children}</button>
    );
}