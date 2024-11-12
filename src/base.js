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
  vue: true,
  yaml: true,
}
