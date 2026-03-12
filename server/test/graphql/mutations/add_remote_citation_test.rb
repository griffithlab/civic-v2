require "test_helper"

class AddRemoteCitationTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @add_citation_mutation = <<-GRAPHQL
      mutation($citationId: String!, $sourceType: SourceSource!) {
        addRemoteCitation(input: { citationId: $citationId, sourceType: $sourceType }) {
          newSource {
            id
            citationId
            sourceType
          }
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @add_citation_mutation,
      variables: { citationId: "99999999", sourceType: "PUBMED" },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a new source with PUBMED type" do
    response = execute_mutation(
      @add_citation_mutation,
      user: @user ,
      variables: { citationId: "99999999", sourceType: "PUBMED" },
    )
    result = response.dig("data", "addRemoteCitation", "newSource")
    assert_not_nil result
    assert_equal 99999999, result["citationId"]
  end

  test "creates a new source with ASCO type" do
    response = execute_mutation(
      @add_citation_mutation,
      user: @user ,
      variables: { citationId: "88888888", sourceType: "ASCO" },
    )
    result = response.dig("data", "addRemoteCitation", "newSource")
    assert_not_nil result
    assert_equal 88888888, result["citationId"]
  end

  test "returns existing source if citation_id and source_type match" do
    existing = sources(:pubmed_source)
    response = execute_mutation(
      @add_citation_mutation,
      user: @user ,
      variables: { citationId: existing.citation_id, sourceType: "PUBMED" },
    )
    result = response.dig("data", "addRemoteCitation", "newSource")
    assert_not_nil result
    assert_equal existing.id, result["id"]
  end
end
