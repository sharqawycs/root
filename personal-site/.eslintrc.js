module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['mdx', '@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:mdx/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
      parser: 'eslint-mdx',
    },
  ],
  rules: {
    // your custom rules
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
