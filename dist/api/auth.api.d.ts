import { AxiosInstance } from 'axios';
import { AuthRequestDTO, AuthResponseDTO, RegisterRequestDTO } from '../index';
export declare const createAuthApi: (http: AxiosInstance) => {
    login: (data: AuthRequestDTO) => Promise<import("axios").AxiosResponse<AuthResponseDTO, any, {}>>;
    register: (data: RegisterRequestDTO) => Promise<import("axios").AxiosResponse<AuthResponseDTO, any, {}>>;
    refresh: (refreshToken: string) => Promise<import("axios").AxiosResponse<AuthResponseDTO, any, {}>>;
};
//# sourceMappingURL=auth.api.d.ts.map