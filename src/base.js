export const baseConfig = {
  ignores: [
    '**/fixtures',
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
    'no-implicit-coercion': [
      'error',
    ],
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
    'vue/max-len': [
      'error',
      {
        code: 120,
        ignoreHTMLAttributeValues: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'vue/no-template-shadow': 'error',
    'vue/no-undef-components': [
      'error',
    ],
  },
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  typescript: {
    filesTypeAware: [
      '**\/*.{ts,tsx,vue}',
    ],
    overrides: {
      'ts/no-floating-promises': 'error',
      'ts/strict-boolean-expressions': [
        'error',
        {
          allowAny: false,
          allowNullableBoolean: false,
          allowNullableEnum: false,
          allowNullableNumber: false,
          allowNullableObject: false,
          allowNullableString: false,
          allowNumber: false,
          allowString: false,
        },
      ],
    },
    parserOptions: {
      parser: '@typescript-eslint/parser',
      project: './tsconfig.json',
    },
  },
  vue: true,
  yaml: true,
}
