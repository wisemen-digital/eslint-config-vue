import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export const tailwindConfig = [
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/assets/styles/index.css',
      },
    },
  },
]
