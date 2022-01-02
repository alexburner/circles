module.exports = {
  ignorePatterns: ['**/*.js'], // Only target .ts & .tsx
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    // Cascading priority: each subsequent ruleset overrides overlaps in previous
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier', // Must be last: turns off any rules that prettier can handle
  ],
  rules: {},
}
