import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import tsParser from '@typescript-eslint/parser';
import { fileURLToPath } from "url";

const tsconfigRootDir = fileURLToPath(new URL(".", import.meta.url));

export default tseslint.config(
  { ignores: ["**/dist", "**/node_modules"] },

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    ignores: [],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      parserOptions: {
        sourceType: "module",
      },
    },
    plugins: {},
    rules: {},
  },

  // Frontend (React/TS) override
  {
    files: ["frontend/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: [
          "./frontend/tsconfig.app.json",
          "./frontend/tsconfig.node.json",
        ],
        tsconfigRootDir: tsconfigRootDir,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
