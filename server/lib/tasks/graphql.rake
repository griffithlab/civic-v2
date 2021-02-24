require "graphql/rake_task"
GraphQL::RakeTask.new(
  schema_name: "Civic2Schema",
  directory: '../schema/model/'
)
