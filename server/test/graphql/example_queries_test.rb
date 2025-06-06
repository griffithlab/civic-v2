require "test_helper"

class ExampleQueriesTest < ActiveSupport::TestCase
  def setup
    MolecularProfile.reindex
    path = File.join(Rails.root, "config", "query_examples")
    @queries = GqlExamples.new(path)
  end

  test "graphiql example queries" do
    @queries.examples.each do |q|
      query = q["query"]
      resp = Civic2Schema.execute(query)
      assert_nil(resp["errors"])
    end
  end
end
