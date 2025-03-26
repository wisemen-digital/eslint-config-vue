import { rules } from 'eslint-plugin-putout'

export const putoutConfig = {
  name: 'putout',
  plugins: {
    putout: { rules },
  },
  rules: {
    'putout/function-declaration-paren-newline': 'off',
    'putout/long-properties-destructuring': 'error',
    'putout/multiple-properties-destructuring': 'error',
    'putout/newline-function-call-arguments': 'off',
    'putout/object-property-newline': 'error',
    'putout/objects-braces-inside-array': 'off',
    'putout/remove-empty-specifiers': 'error',
    'putout/remove-newline-after-default-import': 'error',
    'putout/remove-newline-from-empty-object': 'error',
    'putout/single-property-destructuring': 'error',
    'putout/tape-add-newline-before-assertion': 'error',
    'putout/tape-add-newline-between-tests': 'error',
    'putout/tape-remove-newline-before-t-end': 'error',
  },
}
