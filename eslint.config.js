import antfu from '@antfu/eslint-config'

import { a11yConfig } from './src/a11y.js'
import { baseConfig } from './src/base.js'
import { compatConfig } from './src/compatLint.js'
import { i18nConfig } from './src/i18n.js'
import { perfectionistConfig } from './src/perfectionist.js'
import { putoutConfig } from './src/putout.js'
import { simpleSortConfig } from './src/simpleSort.js'
import { spacingConfig } from './src/spacing.js'
import { unicornConfig } from './src/unicorn.js'
import { vitestConfig } from './src/vitest.js'

export default antfu(
  baseConfig,
  spacingConfig,
  perfectionistConfig,
  putoutConfig,
  unicornConfig,
  a11yConfig,
  ...compatConfig,
  simpleSortConfig,
  vitestConfig,
  i18nConfig,
  {
    settings: {
      'import/extensions': [
        '.ts',
      ],
      'vue-i18n': {
        localeDir: './src/locales/*.json',
        messageSyntaxVersion: '^9.0.0',
      },
    },
  },
)
