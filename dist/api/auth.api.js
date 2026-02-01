"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthApi = void 0;
const createAuthApi = (http) => ({
    login: (data) => http.post('/auth/login', data),
    register: (data) => http.post('/auth/register', data),
    refresh: (refreshToken) => http.post('/auth/refresh', { refreshToken }),
});
exports.createAuthApi = createAuthApi;
//# sourceMappingURL=auth.api.js.map