module.exports = {
  "ignorePatterns": ["*.cy.js"],
  "env": {
    "browser": true,
    "es2021": true,
    "es6": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended",
    "plugin:@intlify/vue-i18n/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "@intlify/vue-i18n/no-dynamic-keys": "error",
    "@intlify/vue-i18n/no-unused-keys": ["error", { "extensions": [",.js", ",.ts", ",.vue"] }],
    "@intlify/vue-i18n/no-raw-text": "off",
    "@intlify/vue-i18n/key-format-style": ["error", "snake_case"],
    "@intlify/vue-i18n/no-duplicate-keys-in-locale": "error",
    "@intlify/vue-i18n/no-missing-keys-in-other-locales": "error",
    "@intlify/vue-i18n/no-missing-keys": "error",
    "@intlify/vue-i18n/valid-message-syntax": "error",
    "func-style": ["error", "declaration", { "allowArrowFunctions": false }],
    "camelcase": "error",
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "block" },
      { "blankLine": "always", "prev": "block", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "block-like" },
      { "blankLine": "always", "prev": "block-like", "next": "*" }
    ],
    "implicit-arrow-linebreak": ["off"],
    "curly": "error",
    "no-console": "error",
    "no-unused-vars": "off",
    "sort-keys-fix/sort-keys-fix": "error",
    "vue/no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "require-explicit-generics/require-explicit-generics": ["warn", ["computed", "ref", "reactive", "defineEmits"]],
    "unused-imports/no-unused-imports": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "vue/no-reserved-component-names": [
      "error",
      {
        "disallowVueBuiltInComponents": true,
        "disallowVue3BuiltInComponents": true
      }
    ],
    "vue/no-v-html": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        "registeredComponentsOnly": true
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "always",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ],
    "vue/require-prop-types": ["error"],
    "vue/require-default-prop": ["error"],
    "vue/v-bind-style": ["error", "shorthand"],
    "vue/v-on-style": ["error", "shorthand"],
    "vue/attributes-order": [
      "error",
      {
        "order": [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ],
        "alphabetical": true
      }
    ],
    "vue/require-explicit-emits": [
      "error",
      {
        "allowProps": false
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "tabWidth": 2,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "bracketSpacing": true,
        "printWidth": 120,
        "trailingComma": "es5",
        "bracketSameLine": false,
        "useTabs": false,
        "arrowParens": "always",
        "singleAttributePerLine": true,
        "endOfLine": "auto",
        "quoteProps": "consistent"
      }
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{vue}": "PASCAL_CASE",
        "**/*.{js,ts}": "CAMEL_CASE"
      },
      {
        "ignoreMiddleExtensions": true
      }
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "KEBAB_CASE"
      }
    ]
  },
  "settings": {
    "vue-i18n": {
      "localeDir": "./src/locales/*.json",
      "messageSyntaxVersion": "^9.0.0"
    }
  },
  "overrides": [
    {
      "files": ["cypress/e2e/**/*.{cy,spec}.ts"],
      "extends": ["plugin:cypress/recommended"]
    }
  ],
  "plugins": [
    "vue",
    "sort-keys-fix",
    "simple-import-sort",
    "prettier",
    "require-explicit-generics",
    "unused-imports",
    "check-file"
  ]
}
