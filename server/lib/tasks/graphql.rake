require "graphql/rake_task"

# Only the SDL dump (`rake graphql:schema:idl`) feeds the toolchain: it writes
# the schema the client's codegen reads, and updated_idl_test.rb asserts it
# stays current. The JSON introspection dump has no consumer, so it is aimed at
# gitignored tmp/ — `graphql:schema:json` and `:dump` must not recreate the
# committed artifacts that were removed from client/src/app/generated/.
# Both outfiles are joined onto `directory`, hence the walk back up to
# server/tmp/civic.schema.json.
GraphQL::RakeTask.new(
  schema_name: "Civic2Schema",
  directory: "../client/src/app/generated/",
  idl_outfile: "server.model.graphql",
  json_outfile: "../../../../server/tmp/civic.schema.json"
)
