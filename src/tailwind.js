import tailwind from 'eslint-plugin-tailwindcss'

export const tailwindConfig = [
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': [
        'error',
        {
          whitelist: [
            '^custom-.*',
            '.*-variant-.*',
          ],
        },
      ],
    },
  },
]
