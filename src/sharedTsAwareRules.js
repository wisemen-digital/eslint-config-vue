export const sharedTsAwareRules = {
  'ts/no-floating-promises': 'error',
  'ts/strict-boolean-expressions': [
    'error',
    {
      allowAny: false,
      allowNullableBoolean: false,
      allowNullableEnum: false,
      allowNullableNumber: false,
      allowNullableObject: false,
      allowNullableString: false,
      allowNumber: false,
      allowString: false,
    },
  ],
}
