require "test_helper"

class ResolveFlagTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @other_curator = users(:other_curator)
    @org = organizations(:test_org)
    @flag = Flag.find(ActiveRecord::FixtureSet.identify(:open_flag))
    @resolved_flag = Flag.find(ActiveRecord::FixtureSet.identify(:resolved_flag))
    @query = <<-GRAPHQL
      mutation($id: Int!, $orgId: Int, $comment: String!) {
        resolveFlag(input: {
          id: $id,
          organizationId: $orgId,
          comment: $comment
        }) {
          flag {
            id
            state
          }
        }
      }
    GRAPHQL
  end

  test "flagging user can resolve their own flag" do
    response = execute_mutation(
      @query,
      variables: { id: @flag.id, orgId: @org.id, comment: "Resolving my own flag since the issue was addressed." },
      user: @curator,
    )
    assert_graphql_success(response)
    assert_not_nil response.dig("data", "resolveFlag", "flag", "id")
  end

  test "editor can resolve another users flag" do
    response = execute_mutation(
      @query,
      variables: { id: @flag.id, orgId: @org.id, comment: "Resolving this flag as an editor after review." },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_not_nil response.dig("data", "resolveFlag", "flag", "id")
  end

  test "requires authentication" do
    response = execute_mutation(
      @query,
      variables: { id: @flag.id, orgId: @org.id, comment: "Testing authentication requirement." },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "non-editor non-flagger cannot resolve flag" do
    response = execute_mutation(
      @query,
      variables: { id: @flag.id, orgId: @org.id, comment: "Curator trying to resolve someone elses flag." },
      user: @other_curator,
    )
    assert_graphql_error(response, /must be an editor to resolve this flag/i)
  end

  test "non-existent flag fails" do
    response = execute_mutation(
      @query,
      variables: { id: 999999, orgId: @org.id, comment: "Trying to resolve a non-existent flag." },
      user: @editor,
    )
    assert_graphql_error(response, /flag with id .* does(n't| not) exist/i)
  end

  test "already resolved flag fails" do
    response = execute_mutation(
      @query,
      variables: { id: @resolved_flag.id, orgId: @org.id, comment: "Trying to resolve an already resolved flag." },
      user: @editor,
    )
    assert_graphql_error(response, /already resolved/i)
  end
end
