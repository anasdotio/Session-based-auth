module.exports = {
  env: {
    es2024: true,
    node: true,
    browser: false,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['node_modules/', 'dist/', 'out/'],
};
