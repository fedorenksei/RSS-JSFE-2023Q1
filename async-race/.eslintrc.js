module.exports = {
  plugins: ['prettier', 'import', '@typescript-eslint'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-console': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-explicit-any': 2,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['*config.js', '.eslintrc.js'],
};
