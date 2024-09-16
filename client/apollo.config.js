module.exports = {
  client: {
    service: {
      // can be a string pointing to a single file or an array of strings
      localSchemaFile: './src/app/generated/server.model.graphql',
    },
    excludes: [
      './src/app/generated/*.ts',
      './src/app/generated/*.json',
    ],
  },
}
