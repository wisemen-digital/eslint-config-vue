module.exports = {
  "extends": [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "plugin:prettier/recommended"
  ],

  "plugins": [
    "simple-import-sort",
    "require-explicit-generics",
    "unused-imports",
    "check-file",
    "putout",
    "prettier"
  ],

  "rules": {
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "tabWidth": 2,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "bracketSpacing": true,
        "printWidth": 100,
        "trailingComma": "es5",
        "bracketSameLine": false,
        "useTabs": false,
        "arrowParens": "always",
        "singleAttributePerLine": true,
        "endOfLine": "auto",
        "quoteProps": "consistent"
      }
    ],

    // TODO
    "camelcase": ["error", {
      "properties": "always",
    }],

    /**
     * Don't allow unused variables
     */
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",

    /**
     * @link https://eslint.org/docs/latest/rules/brace-style
     *
     * ✓ if (foo) {
     *
     * } else {
     *
     * }
     *
     * ✗ if (foo) {
     *
     * }
     * else {
     *
     * }
     */
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],

    /**
     * @link https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
     * ✓ (foo) => bar
     * ✗ (foo) =>
     *   bar
     */
    "implicit-arrow-linebreak": ["error", "beside"],

    /**
     * @link https://eslint.org/docs/latest/rules/curly
     * ✓ if (foo) {
     *  return bar
     * }
     *
     * ✗ if (foo)
     *  return bar
     */
    "curly": "error",

    /**
     * @link https://typescript-eslint.io/rules/consistent-type-imports
     * ✓ import type { Foo } from 'foo'
     * ✗ import { Foo } from 'foo'
     */
    "@typescript-eslint/consistent-type-imports": "error",

    /**
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     * ✓ function foo(): string {}
     * ✗ function foo() {}
     */
    "@typescript-eslint/explicit-function-return-type": "error",

    /**
     * @link https://typescript-eslint.io/rules/consistent-generic-constructors/
     * ✓ const map = new Map<string, number>()
     * ✗ const map: Map<string, number> = new Map()
     */
    "@typescript-eslint/consistent-generic-constructors": "error",

    /**
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md
     */
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "require-explicit-generics/require-explicit-generics": [
      "warn",
      [
        "computed",
        "ref",
        "reactive",
        "defineEmits",
        "defineProps"
      ]
    ],
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
    ],

    "max-len": "off",

    /**
     * Allow eslint-disable
     */
    "eslint-comments/no-unlimited-disable": "off",

    /**
     *
     */
    "vue/max-len": [
      "error",
      {
        "code": 100,
        "comments": 100,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreRegExpLiterals": true,
        "ignoreTemplateLiterals": true,
        "ignoreHTMLTextContents": true,
        "ignoreHTMLAttributeValues": true,
      }
    ],

    /**
     * ✓ () => foo
     * ✗ () => { return foo }
     */
    "arrow-body-style": ["error", "as-needed"],

    /**
     * Only allow camelCase
     */
    "camelcase": ["error", { "properties": "always" }],

    /**
     * A function return type must be defined
     */
    "@typescript-eslint/explicit-function-return-type": "error",


    "nonblock-statement-body-position": "off",

    /**
     * A function callback parameter must always be wrapped by ()
     *
     * ✓ (foo) => foo
     * ✗ foo => foo
     */
    "arrow-parens": ["error", "always"],

    /**
     * Auto wrap imports
     */
    "putout/multiple-properties-destructuring": [
      "error", {
        "minProperties": 3
      }
    ],

    /**
     * Wrap objects
     */
    "object-property-newline": [
      "error", {
        "allowAllPropertiesOnSameLine": false
      }
    ],

    /**
     * Wrap arrays
     */
    "array-bracket-newline": [
      "error", {
        "multiline": true,
        "minItems": 3
      }
    ],

    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },
      "multiline": {
        "max": 1
      }
    }],

    /**
     * TODO: check if necessary
     * https://eslint.vuejs.org/rules/v-for-delimiter-style.html
     *
     * Only allow `in`
     * ✓ v-for="user in users"
     * ✗ v-for="user of users"
     */
    "vue/v-for-delimiter-style": ["error", "in"],

    /**
     * https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
     *
     * Only allow hyphenated event names
     * ✓ some-event
     * ✗ someEvent
     */
    "vue/v-on-event-hyphenation": ["error", "always", {
      "autofix": true,
      "ignore": []
    }],

    /**
     * https://eslint.vuejs.org/rules/v-on-function-call.html
     *
     * Forbid parentheses for method calls without arguments
     * ✓ @click="handleClick"
     * ✓ @click="handleClick(foo)"
     * ✗ @click="handleClick()"
     */
    "vue/v-on-function-call": ["error", "never"],

    /**
     * https://eslint.vuejs.org/rules/component-name-in-template-casing.html#pascalcase-registeredcomponentsonly-true-default
     *
     * Custom component names should be PascalCase
     * ✓ <UserList />
     * ✗ <user-list />
     */
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "registeredComponentsOnly": false
    }],

    /**
     * https://eslint.vuejs.org/rules/no-unused-refs.html
     *
     * Show an error when a ref is defined but unused
     */
    "vue/no-unused-refs": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-useless-mustaches.html
     *
     * Only use {{  }} when necessary
     * ✓ {{ foo }}
     * ✗ {{ "Bar" }}
     */
    "vue/no-useless-mustaches": ["error", {
      "ignoreIncludesComment": false,
      "ignoreStringEscape": false
    }],

    /**
     * Don't use v-bind when not necessary
     * ✓ <div :foo="bar" />
     * ✗ <div v-bind:foo="bar" />
     */
    "vue/no-useless-v-bind": ["error", {
      "ignoreIncludesComment": false,
      "ignoreStringEscape": false
    }],

    /**
    * https://eslint.vuejs.org/rules/block-tag-newline.html
    *
    * Enforce a linebreak after <script> and <template>
    */
    "vue/block-tag-newline": ["error"],

    /**
     * https://eslint.vuejs.org/rules/custom-event-name-casing.html
     *
     * Enforce event casing is camelCase
     */
    "vue/custom-event-name-casing": ["error", "camelCase", {
      "ignores": ["/.+?:.+/"]
    }],

    /**
     * https://eslint.vuejs.org/rules/html-button-has-type.html
     *
     * Disallow usage of button without an explicit
     * type attribute
     */
    "vue/html-button-has-type": ["error", {
      "button": true,
      "submit": true,
      "reset": true,
    }],

    /**
     * https://eslint.vuejs.org/rules/html-comment-content-newline.html
     *
     * Enforce unified line brake in HTML comments
     */
    "vue/html-comment-content-newline": ["error", {
      "singleline": "ignore",
      "multiline": "always"
    }, {
      "exceptions": []
    }],

    /**
     * https://eslint.vuejs.org/rules/html-comment-content-spacing.html
     *
     * Enforce unified spacing in HTML comments
     */
    "vue/html-comment-content-spacing": ["error", "always", {
      "exceptions": []
    }],

    /**
     * https://eslint.vuejs.org/rules/html-comment-indent.html
     *
     * Enforce consistent indentation in HTML comments
     */
    "vue/html-comment-indent": ["error", 2],

    /**
     * https://eslint.vuejs.org/rules/no-child-content.html
     *
     * Disallow element"s child contents which would be
     * overwritten by a directive like v-html or v-text
     */
    "vue/no-child-content": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
     *
     * Enforce inheritAttrs to be set to false when
     * using v-bind="$attrs"
     */
    "vue/no-duplicate-attr-inheritance": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-empty-component-block.html
     *
     * Disallow the <template> <script> <style> block to be empty
     */
    "vue/no-empty-component-block": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
     *
     * Disallow to pass multiple objects into array to class
     */
    "vue/no-multiple-objects-in-class": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-restricted-v-bind.html
     *
     * Show error for :v-if, :v-model, ...
     */
    "vue/no-restricted-v-bind": ["error", {
      "argument": "/^v-/",
      "message": "Using `:v-xxx` is not allowed. Instead, remove `:` and use it as directive."
    }],

    /**
     * vue/no-template-target-blank
     *
     * Disallow target="_blank" attribute without
     * rel="noopener noreferrer"
     */
    "vue/no-template-target-blank": ["error", {
      "allowReferrer": false,
      "enforceDynamicLinks": "always"
    }],

    /**
     * https://eslint.vuejs.org/rules/padding-line-between-blocks.html
     *
     * Require or disallow padding lines between blocks
     */
    "vue/padding-line-between-blocks": ["error", "always"],

    /**
     * https://eslint.vuejs.org/rules/prefer-separate-static-class.html
     *
     * Require static class names in template to be
     * in a separate class attribute
     */
    "vue/prefer-separate-static-class": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-irregular-whitespace.html
     *
     * Disallow irregular whitespace
     */
    "vue/no-irregular-whitespace": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-restricted-syntax.html
     *
     * ✓ {{ foo }}
     * ✗ {{ foo() }}
     */
    "vue/no-restricted-syntax": ["error"],

    "putout/object-property-newline": "error",
    /*
     * https://eslint.org/docs/rules/indent
     *
     * Use tabs for indentation
     * */
    "indent": ["error", "tab"],

    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0}],
    "@typescript-eslint/await-thenable": "error",

    "@typescript-eslint/no-for-in-array": "error", // te bekijken met jeffrey

    //@wouter DONE
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",

    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "off", //lijkt overkill
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    //kunnen de bovenstaande regels vervangen door geen any's toestaan?

    //@jeroen DONE
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/unbound-method": "off", // te bekijken of deze echt nodig is
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",


    // @liam DONE
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",

    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",

    "@typescript-eslint/no-inferrable-types": "error", //te bekijken of ie werkt zoals we denken dat die werkt

    // @nick DONE
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",

    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-this-alias": "error",

    //Kiryl DONE
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",

    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",

    //tanya
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/ban-tslint-comment": "warn",
    "@typescript-eslint/class-literal-property-style": "warn",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",

    //andy
    "@typescript-eslint/consistent-type-definitions": "warn",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/no-base-to-string": "warn",
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-invalid-void-type": "warn",

    //Jeffrey
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unsafe-declaration-merging": "warn",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",

    //@Koen
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-return-this-type": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "warn",
  },
}