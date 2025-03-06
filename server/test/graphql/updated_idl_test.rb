require "test_helper"

class UpdatedIdlTest < ActiveSupport::TestCase
  def test_idl_is_up_to_date
    current_schema = Civic2Schema.to_definition
    schema_file = File.read(Rails.root.join("../client/src/app/generated/server.model.graphql"))
    assert_equal(current_schema.strip, schema_file.strip, "Update the schema file with `bundle exec rake graphql:schema:idl`")
  end
end
