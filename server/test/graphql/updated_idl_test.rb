require "test_helper"

class UpdatedIdlTest < ActiveSupport::TestCase
  def test_idl_is_up_to_date
    current_schema = Civic2Schema.to_definition
    schema_file = File.read(Rails.root.join("../schema.graphql"))
    assert_equal(current_schema, schema_file, "Update the schema file with `bundle exec rake graphql:schema:idl`")
  end
end