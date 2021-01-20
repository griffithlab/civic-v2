module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    '@graphql-eslint'
  ],
  rules: {
  },
  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      parserOptions: {
        "schema": ["./model/civic.graphql"],
        "operations": ["./src/**/*.graphql"]
      },
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/require-id-when-available': [
          'error',
          {fieldName: '_id',},
        ],
        '@graphql-eslint/unique-fragment-name': 'warn',
        '@graphql-eslint/validate-against-schema': 'error',
        '@graphql-eslint/no-anonymous-operations': 'warn',
        '@graphql-eslint/no-operation-name-suffix': 'error',
        '@graphql-eslint/unique-enum-value-names': 'error',
        '@graphql-eslint/no-case-insensitive-enum-values-duplicates': ['error'],
      },
    },
  ],
};
