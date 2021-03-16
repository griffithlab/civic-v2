require "graphql/rake_task"
GraphQL::RakeTask.new(
  schema_name: "Civic2Schema",
  directory: '../client/src/app/generated/',
  idl_outfile: 'civic.model.graphql',
  json_outfile: 'civic.schema.json'
)
