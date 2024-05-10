const customGrouping = {
  'custom-groups': {
    id: '{id,uuid}',
    path: 'path',
    booleans: '{is*,has*}',
    date: '{*At,*On,*_at,*_on,*_date,*_time,*Date,*Time}',
    event: 'on*',
    relations: '{*Id,*_id,*_uuid,*_uuid}',
    unknown: '*',
    component: 'component',
    children: 'children',
  },
  'groups': [
    'id',
    'relations',
    'date',
    'booleans',
    'path',
    'unknown',
    'component',
    'children',
    'event',
  ],
  'order': 'asc',
  'type': 'natural',
}

export const perfectionistConfig = {
  name: 'perfectionist-config',
  rules: {
    'perfectionist/sort-array-includes': [
      'error',
      {
        'order': 'asc',
        'spread-last': true,
        'type': 'natural',
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
      },
    ],
    'perfectionist/sort-union-types': [
      'error',
      {
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-vue-attributes': 'off',
  },
}
