export interface RegisterRequestDTO {
    email: string;
    username: string;
    password: string;
}
export interface AuthResponseDTO {
    token?: string;
    refreshToken?: string;
    message?: string;
}
export interface RefreshTokenRequestDTO {
    refreshToken?: string;
}
export interface RefreshTokenResponseDTO {
    accessToken?: string;
    refreshToken?: string;
    message?: string;
}
export interface AuthRequestDTO {
    email: string;
    password: string;
}
//# sourceMappingURL=index.d.ts.map