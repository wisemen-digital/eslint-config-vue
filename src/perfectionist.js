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
        'custom-groups': {
          id: 'id',
          booleans: '{is*,has*}',
          date: '*At',
          event: 'on*',
          relations: '*Id',
          unknown: '*',
        },
        'groups': [
          'id',
          'relations',
          'date',
          'booleans',
          'unknown',
          'event',
          'multiline',
        ],

        'order': 'asc',
        'type': 'natural',
      },
    ],
    'perfectionist/sort-named-imports': 'off',
    'perfectionist/sort-object-types': [
      'error',
      {
        'custom-groups': {
          id: 'id',
          booleans: '{is*,has*}',
          date: '*At',
          event: 'on*',
          relations: '*Id',
          unknown: '*',
        },
        'groups': [
          'id',
          'relations',
          'date',
          'booleans',
          'unknown',
          'event',
          'multiline',
        ],
        'order': 'asc',
        'type': 'natural',
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        'custom-groups': {
          id: 'id',
          booleans: '{is*,has*}',
          date: '*At',
          event: 'on*',
          relations: '*Id',
          unknown: '*',
        },
        'groups': [
          'id',
          'relations',
          'date',
          'booleans',
          'unknown',
          'event',
        ],
        'order': 'asc',
        'type': 'natural',
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
