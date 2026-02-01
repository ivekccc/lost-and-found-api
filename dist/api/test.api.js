"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestApi = void 0;
const createTestApi = (http) => ({
    secret: () => http.get('/secret'),
});
exports.createTestApi = createTestApi;
//# sourceMappingURL=test.api.js.map