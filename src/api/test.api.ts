import { AxiosInstance } from 'axios';

export const createTestApi = (http: AxiosInstance) => ({
  secret: () => http.get<string>('/secret'),
});
