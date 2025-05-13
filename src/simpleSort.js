import simpleImportSort from 'eslint-plugin-simple-import-sort'

export const simpleSortConfig = {
  name: 'simple-import-sort',
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
}
