/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'import', 'storybook'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
};

module.exports = config;
