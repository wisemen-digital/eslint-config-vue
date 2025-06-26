import eslintPluginWisemen from 'eslint-plugin-wisemen'

export const wisemenConfig = {
  plugins: {
    'eslint-plugin-wisemen': eslintPluginWisemen,
  },
  rules: {
    'eslint-plugin-wisemen/explicit-function-return-type-with-regex': [
      'error',
      {
        allowedRegexes: [
          '^use[A-Z]',
        ],
      },
    ],
  },
}
