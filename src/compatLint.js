import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export const compatConfig = compat.config({
  plugins: [
    'require-explicit-generics',
    'check-file',
    'path',
    'newline-destructuring',
    'import-newlines',
  ],
  rules: {
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{js,ts}': 'CAMEL_CASE',
        '**/*.{vue}': 'PASCAL_CASE',
      },
      { ignoreMiddleExtensions: true },
    ],
    'check-file/folder-naming-convention': [
      'error',
      { 'src/**/': 'KEBAB_CASE' },
    ],
    'import-newlines/enforce': [
      'error',
      { items: 1 },
    ],

    'newline-destructuring/newline': 'error',
    'path/no-relative-imports': [
      'error',
      { maxDepth: 0 },
    ],
    'require-explicit-generics/require-explicit-generics': [
      'error',
      [
        'computed',
        'ref',
        'reactive',
        'defineEmits',
      ],
    ],
    'sort-imports': 'off',
    'unused-imports/no-unused-imports': 'error',
  },
})
