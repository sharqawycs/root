import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },

  tseslint.configs.strict,
  eslintPluginAstro.configs.recommended,

  globalIgnores(['dist/**', '.astro/**', 'node_modules/**']),
]);
