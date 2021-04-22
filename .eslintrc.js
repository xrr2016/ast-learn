module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-function-max-params',
    'eslint-plugin-no-template-literals',
    'eslint-plugin-no-nested-condition',
  ],
  rules: {
    'function-max-params/function-max-params': 'error',
    'no-template-literals/no-template-literals': 'error',
    'no-nested-condition/no-nested-condition': 'error',
  },
}
