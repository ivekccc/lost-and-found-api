"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApi = void 0;
const auth_api_1 = require("./auth.api");
const test_api_1 = require("./test.api");
const createApi = (http) => ({
    auth: (0, auth_api_1.createAuthApi)(http),
    test: (0, test_api_1.createTestApi)(http),
});
exports.createApi = createApi;
//# sourceMappingURL=index.js.map