import { AxiosInstance } from 'axios';
import { createAuthApi } from './auth.api';
import { createTestApi } from './test.api';

export const createApi = (http: AxiosInstance) => ({
  auth: createAuthApi(http),
  test: createTestApi(http),
});

export type Api = ReturnType<typeof createApi>;
