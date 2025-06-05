import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export const tailwindConfig = [
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
      'better-tailwindcss/enforce-consistent-variable-syntax': [
        'error',
        {
          syntax: 'parentheses',
        },
      ],
      'better-tailwindcss/no-unregistered-classes': [
        'error',
        {
          ignore: [
            '^group(?:\\/(\\S*))?$',
            '^peer(?:\\/(\\S*))?$',
            // anything starting with custon- should be ignored
            '^custom-(?:\\S+)?$',
          ],
        },
      ],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/assets/styles/index.css',
      },
    },
  },
]
