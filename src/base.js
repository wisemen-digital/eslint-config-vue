import { sharedTsAwareRules } from './sharedTsAwareRules'

export const baseConfig = {
  ignores: [
    '**/fixtures',
    'dist',
    'node_modules',
  ],
  jsonc: true,
  markdown: false,
  rules: {
    'antfu/consistent-list-newline': 'off',
    'curly': [
      'error',
      'all',
    ],
    'func-style': [
      'error',
      'declaration',
      { allowArrowFunctions: false },
    ],
    'function-paren-newline': [
      'error',
      'multiline-arguments',
    ],
    'import/order': 'off',
    'max-depth': [
      'error',
      3,
    ],
    'no-implicit-coercion': [
      'error',
    ],
    'no-nested-ternary': 'error',
    'require-await': [
      'error',
    ],
    'style/array-bracket-newline': [
      'error',
      {
        minItems: 1,
        multiline: true,
      },
    ],
    'style/array-element-newline': [
      'error',
      {
        ArrayExpression: 'always',
        ArrayPattern: { minItems: 1, multiline: true },
      },
    ],
    'style/arrow-parens': [
      'error',
      'always',
    ],
    'style/object-curly-newline': 'error',
    'ts/explicit-function-return-type': 'error',
    'unicorn/consistent-function-scoping': 'error',
  },
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  typescript: {
    files: [
      '**/*.{ts,tsx}',
    ],
    overrides: sharedTsAwareRules,
    parserOptions: {
      parser: '@typescript-eslint/parser',
      project: './tsconfig.json',
      projectService: true,
    },
  },
  yaml: true,
}
