import eslintPluginPath from 'eslint-plugin-path'

export const pathConfig = {
  plugins: {
    path: eslintPluginPath,
  },
  rules: {
    'path/no-relative-imports': [
      'error',
      {
        maxDepth: 0,
        suggested: false,
      },
    ],
  },
}
