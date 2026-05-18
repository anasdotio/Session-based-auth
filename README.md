# Session Auth JWT

A lightweight session authentication and JWT starter project using Bun.

## ESLint + Prettier Setup

This project is configured for JavaScript with:

- `.eslintrc.cjs` for ESLint rules
- `.prettierrc` for Prettier formatting rules
- `.prettierignore` to exclude generated files

### Installed dev dependencies

- `eslint`
- `prettier`
- `eslint-plugin-prettier`
- `eslint-config-prettier`

### Available scripts

- `bun run lint` — run ESLint across the project
- `bun run format` — format files with Prettier

### ESLint configuration

Create `.eslintrc.cjs` with:

```js
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
```

### Prettier configuration

Create `.prettierrc` with:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

Create `.prettierignore` with:

```text
node_modules
bun.lock
dist
out
coverage
*.log
*.tsbuildinfo
.eslintcache
```

## Getting Started

1. Install dependencies:

```bash
bun install
```

2. Run the linter:

```bash
bun run lint
```

3. Format all files:

```bash
bun run format
```

## Notes

The project is configured with `type: "module"` and `index.js` as the entry point.
