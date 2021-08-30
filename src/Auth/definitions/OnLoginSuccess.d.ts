import { Auth } from "../../Sdk";

export type OnLoginSuccess = (auth: Auth) => void;
export type OnLoginSuccessProps = {
    onLoginSuccess: OnLoginSuccess;
}