import { AuthUserRole } from "./AuthUserRole";

export type AuthType = {
    userId: string;
    userRole: AuthUserRole;
    expiration: number;
    jwt: string;
}

export class Auth {
    static createFromResponse(authData: AuthType): Auth {
        return new Auth(
            authData.userId,
            authData.userRole,
            authData.expiration,
            authData.jwt
        );
    }

    constructor(
        private userId: string,
        private userRole: AuthUserRole,
        private expiration: number,
        private jwt: string
    ) {}

    getUserId(): string {
        return this.userId;
    }

    getUserRole(): AuthUserRole {
        return this.userRole;
    }

    getJwt(): string {
        return this.jwt;
    }

    isExpired(): boolean {
        return this.expiration - Date.now() <= 0;
    }
}