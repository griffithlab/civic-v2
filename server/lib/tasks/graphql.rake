require "graphql/rake_task"

# the SDL dump (`rake graphql:schema:idl`) is the only output the toolchain
# reads: the client's codegen consumes it and updated_idl_test.rb pins it. The
# JSON introspection dump has no consumer, so it goes to gitignored tmp/, not
# client/src/app/generated/. Both outfiles are joined onto `directory`, hence
# the walk back up to server/tmp/civic.schema.json
GraphQL::RakeTask.new(
  schema_name: "Civic2Schema",
  directory: "../client/src/app/generated/",
  idl_outfile: "server.model.graphql",
  json_outfile: "../../../../server/tmp/civic.schema.json"
)
