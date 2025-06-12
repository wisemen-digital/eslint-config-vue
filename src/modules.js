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
        'src/modules/*/index.ts',
        '!src/modules/**/*',
      ],
      errorMessage:
        '🔥 The `root` folder cannot import items from the `modules` folder. 🔥',
      pattern: [
        [
          '!src/modules/**/*',
          '!src/routes/**/*',
          '!src/types/queryKey.type.ts',
        ],

      ],
    },

    {
      name: 'Features',
      allowImportsFrom: [
        [
          'src/**/*',
          '!src/modules/**/*',
        ],
        [
          '!src/modules/**/*/features/**/*',
        ],
        [
          '{family_5}/**/*',
        ],
        [
          'src/modules/*/index.ts',
        ],
      ],
      errorMessage:
        '🔥 Everything in the features folder is encapsulated, you cannot import from outside the folder. 🔥',
      pattern: 'src/modules/*/features/**/*',
    },
    {
      name: 'Modules',
      allowImportsFrom: [

        [
          'src/**/*',
          '!src/modules/**/*',
        ],
        [
          '{family_3}/**/*',
        ],
        [
          'src/modules/*/index.ts',
        ],

      ],
      errorMessage:
        '🔥 Everything in the modules folder is encapsulated, you cannot import from outside the folder. 🔥',
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
