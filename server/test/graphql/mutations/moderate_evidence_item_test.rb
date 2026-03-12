require "test_helper"

class ModerateEvidenceItemTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @editor_submitter = users(:editor_submitter)
    @other_curator = users(:other_curator)
    @org = organizations(:test_org)
    @ei = EvidenceItem.find(ActiveRecord::FixtureSet.identify(:submitted_ei))
    @ei_by_editor = EvidenceItem.find(ActiveRecord::FixtureSet.identify(:submitted_ei_by_editor))
    @query = <<-GRAPHQL
      mutation($eiId: Int!, $newStatus: EvidenceStatus!, $orgId: Int, $comment: String) {
        moderateEvidenceItem(input: {
          evidenceItemId: $eiId,
          newStatus: $newStatus,
          organizationId: $orgId,
          comment: $comment
        }) {
          evidenceItem {
            id
            status
          }
        }
      }
    GRAPHQL
  end

  test "editor can accept a submitted evidence item" do
    response = execute_mutation(
      @query,
      variables: { eiId: @ei.id, newStatus: "ACCEPTED", orgId: @org.id },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @ei.id, response.dig("data", "moderateEvidenceItem", "evidenceItem", "id")
  end

  test "editor can reject a submitted evidence item with comment" do
    response = execute_mutation(
      @query,
      variables: { eiId: @ei.id, newStatus: "REJECTED", orgId: @org.id, comment: "This evidence is not valid for the following reasons." },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @ei.id, response.dig("data", "moderateEvidenceItem", "evidenceItem", "id")
  end

  test "requires authentication" do
    response = execute_mutation(@query, variables: { eiId: @ei.id, newStatus: "ACCEPTED", orgId: @org.id })
    assert_graphql_error(response, /must log in/i)
  end

  test "curator cannot accept evidence (not editor role)" do
    response = execute_mutation(
      @query,
      variables: { eiId: @ei.id, newStatus: "ACCEPTED", orgId: @org.id },
      user: @other_curator,
    )
    assert_graphql_error(response, /must be an editor/i)
  end

  test "submitter cannot accept own evidence" do
    response = execute_mutation(
      @query,
      variables: { eiId: @ei_by_editor.id, newStatus: "ACCEPTED", orgId: @org.id },
      user: @editor_submitter,
    )
    assert_graphql_error(response, /may not accept their own submitted evidence/i)
  end

  test "submitter can reject own evidence" do
    # curator is the submitter of submitted_ei
    response = execute_mutation(
      @query,
      variables: { eiId: @ei.id, newStatus: "REJECTED", orgId: @org.id, comment: "I am rejecting my own submission for testing." },
      user: @curator,
    )
    assert_graphql_success(response)
  end

  test "rejecting without comment fails" do
    response = execute_mutation(
      @query,
      variables: { eiId: @ei.id, newStatus: "REJECTED", orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /comment is required when rejecting or reverting an evidence item/i)
  end

  test "accepting with comment fails" do
    response = execute_mutation(
      @query,
      variables: { eiId: @ei.id, newStatus: "ACCEPTED", orgId: @org.id, comment: "This should not be allowed." },
      user: @editor,
    )
    assert_graphql_error(response, /do not supply a comment when accepting an evidence item/i)
  end

  test "non-existent evidence item fails" do
    response = execute_mutation(
      @query,
      variables: { eiId: 999999, newStatus: "ACCEPTED", orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /evidenceitem with id .* does(n't| not) exist/i)
  end
end
