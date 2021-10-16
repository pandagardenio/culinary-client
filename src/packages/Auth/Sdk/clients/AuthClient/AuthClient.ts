import { ApiClient } from "../../../../ApiClient";
import { GoogleAuthClient, GoogleAuthOptions } from "./GoogleAuthClient";

export class AuthClient {
    public google: GoogleAuthClient = new GoogleAuthClient(this.apiClient, this.googleConfig);
    constructor(private apiClient: ApiClient, private googleConfig: GoogleAuthOptions) {}
}