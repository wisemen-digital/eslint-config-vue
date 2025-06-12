import antfu from '@antfu/eslint-config'
import globals from 'globals'

import { a11yConfig } from './a11y.js'
import { baseConfig } from './base.js'
import { compatConfig } from './compatLint.js'
import { i18nConfig } from './i18n.js'
import { modulesConfig } from './modules.js'
import { pathConfig } from './path.js'
import { perfectionistConfig } from './perfectionist.js'
import { simpleSortConfig } from './simpleSort.js'
import { spacingConfig } from './spacing.js'
import { projectStructureConfig } from './structure.js'
import { tailwindConfig } from './tailwind.js'
import { unicornConfig } from './unicorn.js'
import { vitestConfig } from './vitest.js'

export default antfu(
  baseConfig,
  spacingConfig,
  perfectionistConfig,
  unicornConfig,
  a11yConfig,
  ...compatConfig,
  simpleSortConfig,
  vitestConfig,
  i18nConfig,
  tailwindConfig,
  modulesConfig,
  pathConfig,
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
  {

    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
      sourceType: 'module',
    },
  },
).prepend(projectStructureConfig)
