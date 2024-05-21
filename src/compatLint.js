import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export const compatConfig = compat.config({
  extends: [
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:cypress/recommended',
      ],
      files: [
        'cypress/e2e/**/*.{cy,spec}.ts',
      ],
    },
  ],
  plugins: [
    'require-explicit-generics',
    'check-file',
    'import',
    'putout',
    'path',
  ],
  rules: {
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{js,ts}': 'CAMEL_CASE',
        '**/*.{vue}': 'PASCAL_CASE',
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],

    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/': 'KEBAB_CASE',
      },
    ],
    'import/extensions': [
      'error',
      'always',
      { ignorePackages: true },
    ],
    'path/no-relative-imports': [
      'error',
      {
        maxDepth: 0,
      },
    ],
    'putout/add-newlines-between-specifiers': 'error',
    'putout/add-newlines-between-types-in-union': 'error',
    'putout/array-element-newline': 'error',
    'putout/function-declaration-paren-newline': 'off',
    'putout/long-properties-destructuring': 'error',
    'putout/multiple-properties-destructuring': 'error',
    'putout/newline-function-call-arguments': 'off',
    'putout/object-property-newline': 'error',
    'putout/objects-braces-inside-array': 'off',
    'putout/remove-empty-newline-after-last-element': 'error',
    'putout/remove-empty-newline-after-last-specifier': 'error',
    'putout/remove-empty-newline-before-first-specifier': 'error',
    'putout/remove-empty-specifiers': 'error',
    'putout/remove-newline-after-default-import': 'error',
    'putout/remove-newline-from-empty-object': 'error',
    'putout/single-property-destructuring': 'error',
    'putout/tape-add-newline-before-assertion': 'error',
    'putout/tape-add-newline-between-tests': 'error',
    'putout/tape-remove-newline-before-t-end': 'error',
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
    'tailwindcss/no-custom-classname': [
      'error',
    ],

    'unused-imports/no-unused-imports': 'error',
  },
})
