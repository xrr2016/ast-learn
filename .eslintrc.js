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
  plugins: ['eslint-plugin-func-max-param'],
  rules: {
    'func-max-param/no-template-literals': 'error',
  },
}
