module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  files: ['*.ts'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
  // overrides: [
  //   {
  //     files: ['*.graphql'],
  //     parser: '@graphql-eslint/eslint-plugin',
  //     parserOptions: {
  //       // use `yarn run generate` to recompile this introspection schema
  //       "schema": ["./schema/civic.schema.json"],
  //     },
  //     plugins: ['@graphql-eslint'],
  //     rules: {
  //       '@graphql-eslint/avoid-operation-name-prefix': ['warn', {keywords:['get', 'post']}],
  //       '@graphql-eslint/require-id-when-available': 'warn',
  //       '@graphql-eslint/no-anonymous-operations': 'warn',
  //       '@graphql-eslint/no-case-insensitive-enum-values-duplicates': 'error',
  //       '@graphql-eslint/no-deprecated': 'warn',
  //       '@graphql-eslint/naming-convention': ["error", {"FieldDefinition":"camelCase","ObjectTypeDefinition":"PascalCase"}],
  //       '@graphql-eslint/no-hashtag-description': 'warn',
  //       '@graphql-eslint/no-operation-name-suffix': 'error',
  //       '@graphql-eslint/unique-fragment-name': 'error',
  //       '@graphql-eslint/fields-on-correct-type': 'warn',
  //       '@graphql-eslint/known-directives': 'warn',
  //       '@graphql-eslint/known-fragment-names': 'warn',
  //       '@graphql-eslint/known-type-names': 'warn',
  //       '@graphql-eslint/unique-operation-name': 'error',

  //       // the following options were causing weird errors
  //       // '@graphql-eslint/no-unreachable-types': 'warn',
  //       // '@graphql-eslint/unique-enum-value-names': 'error',
  //     },
  //   },
  // ],
}
