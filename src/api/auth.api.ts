import { AxiosInstance } from 'axios';
import { AuthRequestDTO, AuthResponseDTO, RegisterRequestDTO } from '../index';

export const createAuthApi = (http: AxiosInstance) => ({
  login: (data: AuthRequestDTO) =>
    http.post<AuthResponseDTO>('/auth/login', data),

  register: (data: RegisterRequestDTO) =>
    http.post<AuthResponseDTO>('/auth/register', data),

  refresh: (refreshToken: string) =>
    http.post<AuthResponseDTO>('/auth/refresh', { refreshToken }),
});
