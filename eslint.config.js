import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const compat = new FlatCompat()

export default antfu(
  {
    ignores: [
      '**/fixtures',
    ],
    jsonc: true,
    markdown: false,
    rules: {
      'curly': ['error', 'all'],
      'func-style': ['error', 'declaration', { allowArrowFunctions: false }],
      'import/order': 'off',
      'no-implicit-coercion': ['error'],
      'require-await': ['error'],
      'vue/attributes-order': [
        'error',
        {
          alphabetical: false,
          order: [
            'DEFINITION', // is
            'LIST_RENDERING', // v-for
            'CONDITIONALS', // v-if, v-else-if, v-else, v-show, v-cloak
            'RENDER_MODIFIERS', // v-pre, v-once
            'GLOBAL', // id
            'UNIQUE', // ref, key,
            'SLOT', // slot
            'TWO_WAY_BINDING', // v-model
            'ATTR_DYNAMIC', // v-bind, :foo="bar"
            'ATTR_STATIC', // prop="foo"
            'ATTR_SHORTHAND_BOOL', // boolean props e.g. is-active
            'EVENTS', // @click="foo"
            'CONTENT', // v-html, v-text,
          ],
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          multiline: {
            max: 1,
          },
          singleline: {
            max: 1,
          },
        },
      ],
      'vue/no-template-shadow': 'error',
      'vue/no-undef-components': ['error'],
    },
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    typescript: {
      filesTypeAware: ['**\/*.{ts,tsx,vue}'],
      overrides: {
        'ts/no-floating-promises': 'error',
        'ts/strict-boolean-expressions': ['error', {
          allowAny: false,
          allowNullableBoolean: false,
          allowNullableEnum: false,
          allowNullableNumber: false,
          allowNullableObject: false,
          allowNullableString: false,
          allowNumber: false,
          allowString: false,
        }],
      },
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
      },
    },
    vue: true,
    yaml: false,
  },
  perfectionistNatural,
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended', 'plugin:@intlify/vue-i18n/recommended'],
    overrides: [{
      extends: ['plugin:cypress/recommended'],
      files: ['cypress/e2e/**/*.{cy,spec}.ts'],
    }],
    plugins: ['require-explicit-generics', 'check-file', 'putout', 'simple-import-sort'],
    rules: {
      '@intlify/vue-i18n/key-format-style': ['error', 'snake_case'],
      '@intlify/vue-i18n/no-duplicate-keys-in-locale': 'error',
      '@intlify/vue-i18n/no-dynamic-keys': 'error',
      '@intlify/vue-i18n/no-missing-keys': 'error',
      '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',

      '@intlify/vue-i18n/no-raw-text': 'off',

      '@intlify/vue-i18n/no-unused-keys': ['error', { extensions: [',.js', ',.ts', ',.vue'] }],

      '@intlify/vue-i18n/valid-message-syntax': 'error',
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
      'perfectionist/sort-exports': 'off',
      'perfectionist/sort-imports': 'off',

      'perfectionist/sort-vue-attributes': 'off',

      'putout/add-newline-after-function-call': 'error',
      'putout/add-newline-before-function-call': 'error',

      'putout/add-newline-before-return': 'error',
      'putout/add-newlines-between-specifiers': 'error',
      'putout/add-newlines-between-types-in-union': 'error',
      'putout/array-element-newline': 'error',
      'putout/function-declaration-paren-newline': 'error',

      'putout/long-properties-destructuring': 'error',
      'putout/multiple-properties-destructuring': 'error',
      'putout/newline-function-call-arguments': 'error',
      'putout/object-property-newline': 'error',

      'putout/objects-braces-inside-array': 'error',
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
      'require-explicit-generics/require-explicit-generics': ['error', ['computed', 'ref', 'reactive', 'defineEmits']],

      'tailwindcss/no-custom-classname': ['error'],
    },
  }),

  {
    name: 'simple-import-sort',
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
  {
    settings: {
      'vue-i18n': {
        localeDir: './src/locales/*.json',
        messageSyntaxVersion: '^9.0.0',
      },
    },
  },
)
