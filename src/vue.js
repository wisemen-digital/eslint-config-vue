import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

import { sharedTsAwareRules } from './sharedTsAwareRules'

export const vueConfig = [
  {
    name: 'vue-rules',
    files: [
      '*.vue',
      '**/*.vue',
    ],
    languageOptions: {
      globals: {
        computed: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineProps: 'readonly',
        reactive: 'readonly',
        ref: 'readonly',
        shallowReactive: 'readonly',
        shallowRef: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
      },

      parser: vueParser,
      parserOptions: {
        extraFileExtensions: [
          '.vue',
        ],
        parser: {
          '<template>': 'espree',
          'js': 'espree',
          'ts': tsParser,
        },
        // parser: tsParser,
        project: [
          './tsconfig.json',
        ],
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    processor: vuePlugin.processors['.vue'],
    rules: {
      ...vuePlugin.configs.base.rules,
      ...sharedTsAwareRules,
      'antfu/no-top-level-await': 'off',
      'node/prefer-global/process': 'off',
      'ts/explicit-function-return-type': 'off',

      'vue/array-bracket-spacing': [
        'error',
        'never',
      ],
      'vue/arrow-spacing': [
        'error',
        { after: true, before: true },
      ],
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
      'vue/block-order': [
        'error',
        {
          order: [
            'script',
            'template',
            'style',
          ],
        },
      ],
      'vue/block-spacing': [
        'error',
        'always',
      ],
      'vue/block-tag-newline': [
        'error',
        {
          multiline: 'always',
          singleline: 'always',
        },
      ],
      'vue/brace-style': [
        'error',
        'stroustrup',
        { allowSingleLine: true },
      ],
      'vue/comma-dangle': [
        'error',
        'always-multiline',
      ],
      'vue/comma-spacing': [
        'error',
        { after: true, before: false },
      ],
      'vue/comma-style': [
        'error',
        'last',
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
      ],
      'vue/component-options-name-casing': [
        'error',
        'PascalCase',
      ],
      // this is deprecated
      'vue/component-tags-order': 'off',
      'vue/custom-event-name-casing': [
        'error',
        'camelCase',
      ],
      'vue/define-macros-order': [
        'error',
        {
          order: [
            'defineOptions',
            'defineProps',
            'defineEmits',
            'defineSlots',
          ],
        },
      ],
      'vue/dot-location': [
        'error',
        'property',
      ],
      'vue/dot-notation': [
        'error',
        { allowKeywords: true },
      ],
      'vue/eqeqeq': [
        'error',
        'smart',
      ],
      'vue/html-comment-content-spacing': [
        'error',
        'always',
        {
          exceptions: [
            '-',
          ],
        },
      ],
      'vue/html-indent': [
        'error',
        2,
      ],
      'vue/html-quotes': [
        'error',
        'double',
      ],
      'vue/key-spacing': [
        'error',
        { afterColon: true, beforeColon: false },
      ],
      'vue/keyword-spacing': [
        'error',
        { after: true, before: true },
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
      'vue/multi-word-component-names': 'off',
      'vue/no-dupe-keys': 'off',
      'vue/no-empty-pattern': 'error',
      'vue/no-irregular-whitespace': 'error',
      'vue/no-loss-of-precision': 'error',
      'vue/no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'vue/no-restricted-v-bind': [
        'error',
        '/^v-/',
      ],
      'vue/no-setup-props-reactivity-loss': 'off',
      'vue/no-sparse-arrays': 'error',
      'vue/no-template-shadow': 'error',
      'vue/no-undef-components': [
        'error',
      ],
      'vue/no-unused-refs': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/no-v-html': 'off',
      'vue/object-curly-newline': 'off',
      'vue/object-curly-spacing': [
        'error',
        'always',
      ],
      'vue/object-property-newline': [
        'error',
        { allowMultiplePropertiesPerLine: true },
      ],
      'vue/object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: true,
          ignoreConstructors: false,
        },
      ],
      'vue/operator-linebreak': [
        'error',
        'before',
      ],
      'vue/padding-line-between-blocks': [
        'error',
        'always',
      ],
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-template': 'error',
      'vue/prop-name-casing': [
        'error',
        'camelCase',
      ],
      'vue/quote-props': [
        'error',
        'consistent-as-needed',
      ],
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off',
      'vue/space-in-parens': [
        'error',
        'never',
      ],
      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': [
        'error',
        { nonwords: false, words: true },
      ],
      'vue/template-curly-spacing': 'error',
    },
  },
]
