import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "http://localhost:8082/v3/api-docs",
  output: {
    path: "src",
    format: "prettier",
  },
  plugins: [
    {
      name: "@hey-api/typescript",
      enums: "typescript",
    },
  ],
});
