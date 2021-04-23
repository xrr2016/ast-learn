module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'eslint-plugin-function-max-params',
    'eslint-plugin-no-nested-condition',
    'eslint-plugin-react',
  ],
  rules: {
    'function-max-params/function-max-params': 'error',
    'no-nested-condition/no-nested-condition': 'error',
  },
}
