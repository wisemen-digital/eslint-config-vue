const customGrouping = {
  customGroups: {
    id: '{id,uuid}',
    title: 'title',
    name: 'name',
    booleans: '{is*,has*}',
    date: '{*At,*On,*_at,*_on,*_date,*_time,*Date,*Time}',
    event: 'on*',
    relations: '{*Id,*_id,*_uuid,*_uuid}',
    path: 'path',
    component: 'component',
    meta: 'meta',
    redirect: 'redirect',
    children: 'children',
  },
  groups: [
    'id',
    'relations',
    'title',
    'date',
    'booleans',
    'name',
    'unknown',
    'path',
    'component',
    'meta',
    'redirect',
    'children',
    'event',
  ],
  ignoreCase: false,
  order: 'asc',
  type: 'natural',
}

export const perfectionistConfig = {
  name: 'perfectionist-config',
  rules: {
    'perfectionist/sort-array-includes': [
      'error',
      {
        groupKind: 'literals-first',
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-classes': [
      'error',
      {
        groups: [
          'index-signature',
          'static-property',
          'private-property',
          'property',
          'constructor',
          'static-method',
          'private-method',
          'method',
        ],
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-enums': [
      'error',
      {
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-exports': 'off',
    'perfectionist/sort-imports': 'off',

    'perfectionist/sort-interfaces': [
      'error',
      {
        ...customGrouping,
      },
    ],
    'perfectionist/sort-named-imports': 'off',
    'perfectionist/sort-object-types': [
      'error',
      {
        ...customGrouping,
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        ...customGrouping,
        ignorePattern: [
          'variants',
        ],
      },
    ],
    'perfectionist/sort-union-types': [
      'error',
      {
        groups: [
          'conditional',
          'function',
          'import',
          'intersection',
          'keyword',
          'literal',
          'named',
          'object',
          'operator',
          'tuple',
          'union',
          'nullish',
          'unknown',
        ],
        ignoreCase: false,
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-vue-attributes': 'off',
  },
}
