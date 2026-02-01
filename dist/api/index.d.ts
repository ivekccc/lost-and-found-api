import { AxiosInstance } from 'axios';
export declare const createApi: (http: AxiosInstance) => {
    auth: {
        login: (data: import("..").AuthRequestDTO) => Promise<import("axios").AxiosResponse<import("..").AuthResponseDTO, any, {}>>;
        register: (data: import("..").RegisterRequestDTO) => Promise<import("axios").AxiosResponse<import("..").AuthResponseDTO, any, {}>>;
        refresh: (refreshToken: string) => Promise<import("axios").AxiosResponse<import("..").AuthResponseDTO, any, {}>>;
    };
    test: {
        secret: () => Promise<import("axios").AxiosResponse<string, any, {}>>;
    };
};
export type Api = ReturnType<typeof createApi>;
//# sourceMappingURL=index.d.ts.map