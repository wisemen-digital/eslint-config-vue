import antfu from '@antfu/eslint-config'

import { baseConfig } from './src/base.js'
import { compatConfig } from './src/compatLint.js'
import { i18nConfig } from './src/i18n.js'
import { perfectionistConfig } from './src/perfectionist.js'
import { simpleSortConfig } from './src/simpleSort.js'
import { spacingConfig } from './src/spacing.js'

export default antfu(
  baseConfig,
  spacingConfig,
  perfectionistConfig,
  ...compatConfig,
  simpleSortConfig,
  i18nConfig,
  {
    settings: {
      'vue-i18n': {
        localeDir: './src/locales/*.json',
        messageSyntaxVersion: '^9.0.0',
      },
    },
  },
)
