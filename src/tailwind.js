import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'

export const tailwindConfig = [
  {
    plugins: { 'readable-tailwind': eslintPluginReadableTailwind },
    rules: { ...eslintPluginReadableTailwind.configs.error.rules },
  },
]
