require "test_helper"

class UpdateSourceSuggestionStatusTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @org = organizations(:test_org)
    @suggestion = SourceSuggestion.find(ActiveRecord::FixtureSet.identify(:new_suggestion))
    @query = <<-GRAPHQL
      mutation($id: Int!, $newStatus: SourceSuggestionStatus!, $orgId: Int, $reason: String) {
        updateSourceSuggestionStatus(input: {
          id: $id,
          newStatus: $newStatus,
          organizationId: $orgId,
          reason: $reason
        }) {
          sourceSuggestion {
            id
            status
          }
        }
      }
    GRAPHQL
  end

  test "editor can update source suggestion status to curated" do
    response = execute_mutation(@query,
      variables: { id: @suggestion.id, newStatus: "CURATED", orgId: @org.id, reason: "This source has been curated." },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @suggestion.id, response.dig("data", "updateSourceSuggestionStatus", "sourceSuggestion", "id")
  end

  test "curator can update source suggestion status" do
    response = execute_mutation(@query,
      variables: { id: @suggestion.id, newStatus: "CURATED", orgId: @org.id, reason: "Curator is updating this source suggestion." },
      user: @curator,
    )
    assert_graphql_success(response)
    assert_equal @suggestion.id, response.dig("data", "updateSourceSuggestionStatus", "sourceSuggestion", "id")
  end

  test "requires authentication" do
    response = execute_mutation(@query,
      variables: { id: @suggestion.id, newStatus: "CURATED", orgId: @org.id },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "non-existent source suggestion fails" do
    response = execute_mutation(@query,
      variables: { id: 999999, newStatus: "CURATED", orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "editor without COI cannot update" do
    new_editor = User.create!(username: "nocoi_ss_editor", email: "nocoiss@example.com", role: "editor")
    Affiliation.create!(user: new_editor, organization: @org, can_approve: false)
    response = execute_mutation(@query,
      variables: { id: @suggestion.id, newStatus: "CURATED", orgId: @org.id },
      user: new_editor,
    )
    assert_graphql_error(response, /conflict of interest/)
  end
end
