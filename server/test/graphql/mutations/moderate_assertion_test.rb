require "test_helper"

class ModerateAssertionTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @editor_submitter = users(:editor_submitter)
    @other_curator = users(:other_curator)
    @org = organizations(:test_org)
    @assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:submitted_assertion))
    @accepted_assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:accepted_assertion))
    @assertion_by_editor = ::Assertion.find(ActiveRecord::FixtureSet.identify(:submitted_assertion_by_editor))
    @query = <<-GRAPHQL
      mutation($assertionId: Int!, $newStatus: AssertionStatus!, $orgId: Int, $comment: String) {
        moderateAssertion(input: {
          assertionId: $assertionId,
          newStatus: $newStatus,
          organizationId: $orgId,
          comment: $comment
        }) {
          assertion {
            id
            status
          }
        }
      }
    GRAPHQL
  end

  test "editor can accept a submitted assertion" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @assertion.id, newStatus: "ACCEPTED", orgId: @org.id },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @assertion.id, response.dig("data", "moderateAssertion", "assertion", "id")
  end

  test "editor can reject a submitted assertion with comment" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @assertion.id, newStatus: "REJECTED", orgId: @org.id, comment: "This assertion is not sufficiently supported." },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @assertion.id, response.dig("data", "moderateAssertion", "assertion", "id")
  end

  test "editor can withdraw an accepted assertion with comment" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @accepted_assertion.id, newStatus: "WITHDRAWN", orgId: @org.id, comment: "This assertion should no longer be considered active." },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @accepted_assertion.id, response.dig("data", "moderateAssertion", "assertion", "id")
    assert_equal "WITHDRAWN", response.dig("data", "moderateAssertion", "assertion", "status")
    assert_equal "withdrawn", @accepted_assertion.reload.status
    assert_equal "assertion withdrawn", @accepted_assertion.withdrawal_event.action
    assert_equal "withdrew", ModerateAssertionActivity.where(subject: @accepted_assertion).last.verbiage
  end

  test "withdrawing an accepted assertion moves active approvals to requires review" do
    approval = approvals(:active_approval)

    response = execute_mutation(
      @query,
      variables: { assertionId: @accepted_assertion.id, newStatus: "WITHDRAWN", orgId: @org.id, comment: "This assertion should no longer be considered active." },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal "requires_review", approval.reload.status
  end

  test "withdrawing a submitted assertion fails" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @assertion.id, newStatus: "WITHDRAWN", orgId: @org.id, comment: "This assertion cannot be withdrawn yet." },
      user: @editor,
    )
    assert_graphql_error(response, /only accepted assertions may be withdrawn/i)
  end

  test "withdrawing without comment fails" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @accepted_assertion.id, newStatus: "WITHDRAWN", orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /comment is required when rejecting, reverting, or withdrawing an assertion/i)
  end

  test "requires authentication" do
    response = execute_mutation(@query, variables: { assertionId: @assertion.id, newStatus: "ACCEPTED", orgId: @org.id })
    assert_graphql_error(response, /must log in/i)
  end

  test "curator cannot accept assertion (not editor role)" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @assertion.id, newStatus: "ACCEPTED", orgId: @org.id },
      user: @other_curator,
    )
    assert_graphql_error(response, /must be an editor/i)
  end

  test "submitter cannot accept own assertion" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @assertion_by_editor.id, newStatus: "ACCEPTED", orgId: @org.id },
      user: @editor_submitter,
    )
    assert_graphql_error(response, /may not accept their own submitted assertions/i)
  end

  test "submitter can reject own assertion" do
    # curator is the submitter of submitted_assertion
    response = execute_mutation(
      @query,
      variables: { assertionId: @assertion.id, newStatus: "REJECTED", orgId: @org.id, comment: "Rejecting my own assertion for valid reasons." },
      user: @curator,
    )
    assert_graphql_success(response)
  end

  test "rejecting without comment fails" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @assertion.id, newStatus: "REJECTED", orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /comment is required when rejecting, reverting, or withdrawing an assertion/i)
  end

  test "accepting with comment fails" do
    response = execute_mutation(
      @query,
      variables: { assertionId: @assertion.id, newStatus: "ACCEPTED", orgId: @org.id, comment: "Should not be allowed with comment." },
      user: @editor,
    )
    assert_graphql_error(response, /do not supply a comment when accepting an assertion/i)
  end

  test "non-existent assertion fails" do
    response = execute_mutation(
      @query,
      variables: { assertionId: 999999, newStatus: "ACCEPTED", orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /assertion with id .* does(n't| not) exist/i)
  end
end
