require "test_helper"

class RevokeApprovalTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @org = organizations(:test_org)
    @accepted_assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:accepted_assertion))
    @unapproved_assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:accepted_unapproved_assertion))
    @query = <<-GRAPHQL
      mutation($assertionId: Int!, $orgId: Int, $comment: String!) {
        revokeApproval(input: {
          assertionId: $assertionId,
          organizationId: $orgId,
          comment: $comment
        }) {
          assertion {
            id
          }
        }
      }
    GRAPHQL
  end

  test "editor with approval privileges can revoke an existing approval" do
    response = execute_mutation(
      @query,
      variables: {
        assertionId: @accepted_assertion.id,
        orgId: @org.id,
        comment: "Revoking this approval because new evidence suggests otherwise.",
      },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @accepted_assertion.id, response.dig("data", "revokeApproval", "assertion", "id")
  end

  test "requires authentication" do
    response = execute_mutation(
      @query,
      variables: {
        assertionId: @accepted_assertion.id,
        orgId: @org.id,
        comment: "Revoking this approval for testing purposes.",
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "curator without approval privileges cannot revoke" do
    response = execute_mutation(
      @query,
      variables: {
        assertionId: @accepted_assertion.id,
        orgId: @org.id,
        comment: "Attempting to revoke without approval privileges.",
      },
      user: @curator,
    )
    assert_graphql_error(response, /cannot manage approvals/i)
  end

  test "cannot revoke when no active approval exists" do
    response = execute_mutation(
      @query,
      variables: {
        assertionId: @unapproved_assertion.id,
        orgId: @org.id,
        comment: "Trying to revoke non-existent approval for testing.",
      },
      user: @editor,
    )
    assert_graphql_error(response, /no active approvals/i)
  end

  test "non-existent assertion fails" do
    response = execute_mutation(
      @query,
      variables: {
        assertionId: 999999,
        orgId: @org.id,
        comment: "Attempting to revoke on non-existent assertion.",
      },
      user: @editor,
    )
    assert_graphql_error(response, /assertion with id .* does(n't| not) exist/i)
  end
end
