export interface VerifyRequestDTO {
    code: string;
}
export interface AuthResponseDTO {
    token?: string;
    refreshToken?: string;
    message?: string;
}
export interface RegisterRequestDTO {
    email: string;
    username: string;
    password: string;
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
export interface ReportListDTO {
    id?: number;
    title?: string;
    type?: ReportType;
    categoryName?: string;
    status?: ReportStatus;
    location?: string;
    createdAt?: Date;
}
export declare enum ReportStatus {
    ACTIVE = "ACTIVE",
    RESOLVED = "RESOLVED",
    EXPIRED = "EXPIRED",
    FLAGGED = "FLAGGED",
    DELETED = "DELETED"
}
export declare enum ReportType {
    LOST = "LOST",
    FOUND = "FOUND"
}
export interface ReportDetailsDTO {
    id?: number;
    title?: string;
    description?: string;
    type?: ReportType;
    categoryId?: number;
    categoryName?: string;
    status?: ReportStatus;
    location?: string;
    createdAt?: Date;
    expiresAt?: Date;
    userId?: number;
    contactEmail?: string;
    contactPhone?: string;
}
//# sourceMappingURL=index.d.ts.map