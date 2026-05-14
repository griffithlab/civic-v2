require "test_helper"

class ApproveAssertionTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @no_coi_editor = users(:no_coi_editor)
    @org = organizations(:test_org)
    @accepted_assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:accepted_assertion))
    @unapproved_assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:accepted_unapproved_assertion))
    @flagged_assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:flagged_assertion))
    @submitted_assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:submitted_assertion))
    @query = <<-GRAPHQL
      mutation($assertionId: Int!, $orgId: Int) {
        approveAssertion(input: {
          assertionId: $assertionId,
          organizationId: $orgId
        }) {
          assertion {
            id
          }
        }
      }
    GRAPHQL
  end

  test "editor with approval privileges can approve an accepted assertion" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @unapproved_assertion.id, orgId: @org.id },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @unapproved_assertion.id, response.dig("data", "approveAssertion", "assertion", "id")
  end

  test "requires authentication" do
    response = execute_mutation(@query, variables: { assertionId: @accepted_assertion.id, orgId: @org.id })
    assert_graphql_error(response, /must log in/i)
  end

  test "curator without approval privileges cannot approve" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @unapproved_assertion.id, orgId: @org.id },
      user: @curator,
    )
    assert_graphql_error(response, /cannot manage approvals/i)
  end

  test "cannot approve a submitted (non-accepted) assertion" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @submitted_assertion.id, orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /has not been accepted/i)
  end

  test "cannot approve already approved assertion from same org" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @accepted_assertion.id, orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /already been approved/i)
  end

  test "cannot approve a flagged assertion" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @flagged_assertion.id, orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /is flagged/i)
  end

  test "non-existent assertion fails" do
    response = execute_mutation(
      @query,
      variables: { assertionId: 999999, orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /assertion with id .* does(n't| not) exist/i)
  end

  test "editor without COI statement cannot approve" do
    Affiliation.create(user_id: @no_coi_editor.id, organization_id: @org.id, can_approve: true)
    response = execute_mutation(
      @query,
      variables: { assertionId: @unapproved_assertion.id, orgId: @org.id },
      user: @no_coi_editor,
    )
    assert_graphql_error(response, /must have a valid conflict of interest statement/i)
  end
end
