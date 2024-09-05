import vitest from '@vitest/eslint-plugin'

export const vitestConfig = {
  name: 'vitest',
  files: [
    '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}',
  ], // or any other pattern
  rules: {
    ...vitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
    'vitest/max-nested-describe': [
      'error',
      { max: 3 },
    ], // you can also modify rules' behavior using option like this
  },
}
