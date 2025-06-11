// @ts-check
import {
  createIndependentModules,
  projectStructurePlugin,
} from 'eslint-plugin-project-structure'

export const independentModulesConfig = createIndependentModules({
  modules: [
    {
      name: 'Root folder',
      allowImportsFrom: [
        '!src/modules/**/*',
      ],
      errorMessage:
        '🔥 The `root` folder cannot import items from the `modules` folder. 🔥',
      pattern: '!src/modules/**/*',
    },
    {
      name: 'Features',
      allowImportsFrom: [
        '{family_5}/**/*',
      ],
      errorMessage:
        '🔥 Files inside a feature (src/modules/<module>/features/<feature>)  cannot import anything outside their feature. 🔥',
      pattern: 'src/modules/*/features/**/*',
    },
    {
      name: 'Modules',
      allowImportsFrom: [
        '{family_3}/**/*',
      ],
      errorMessage:
        '🔥 Files inside a module (src/modules/<module>/) cannot import anything outside their module. 🔥',
      pattern: [
        'src/modules/**/*',
      ],
    },
  ],
  pathAliases: {
    baseUrl: '.',
    paths: {
      '@/*': [
        './src/*',
      ],
    },
  },
})

export const modulesConfig = {
  files: [
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx',
    '**/*.vue',
  ],
  plugins: {
    'project-structure': projectStructurePlugin,
  },
  rules: {
    // If you have many rules in a separate file.
    'project-structure/independent-modules': [
      'error',
      independentModulesConfig,
    ],
  },
}
