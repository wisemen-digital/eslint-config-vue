const customGrouping = {
  customGroups: [
    {
      elementNamePattern: '^(?:id)$|^(?:uuid.*)$',
      groupName: 'id',
    },
    {
      elementNamePattern: '^(.*Id|.*Uuid|.*_id|.*_uuid)$',
      groupName: 'relations',
    },
    {
      elementNamePattern: '^(?:title)$',
      groupName: 'title',
    },
    {
      elementNamePattern: '^(.*At|.*On|.*_at|.*_on|.*_date|.*_time|.*Date|.*Time)$',
      groupName: 'date',
    },
    {
      elementNamePattern: '^(is.*|has.*)$',
      groupName: 'booleans',
    },
    {
      elementNamePattern: '^(?:name)$',
      groupName: 'name',
    },
    {
      elementNamePattern: 'unknown',
      groupName: 'unknown',
    },
    {
      elementNamePattern: '^(?:path)$',
      groupName: 'path',
    },
    {
      elementNamePattern: '^(?:component)$',
      groupName: 'component',
    },
    {
      elementNamePattern: '^(?:meta)$',
      groupName: 'meta',
    },
    {
      elementNamePattern: '^(?:redirect)$',
      groupName: 'redirect',
    },
    {
      elementNamePattern: '^(?:children)$',
      groupName: 'children',
    },
    {
      elementNamePattern: '^on.*$',
      groupName: 'event',
    },
  ],
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
      { ...customGrouping },
    ],
    'perfectionist/sort-named-imports': 'off',
    'perfectionist/sort-object-types': [
      'error',
      { ...customGrouping },
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
