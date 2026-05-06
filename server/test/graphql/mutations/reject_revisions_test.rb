require "test_helper"

class RejectRevisionsTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @other_curator = users(:other_curator)
    @org = organizations(:test_org)
    @revision = Revision.find(ActiveRecord::FixtureSet.identify(:new_revision))
    @rejected_revision = Revision.find(ActiveRecord::FixtureSet.identify(:rejected_revision))
    @query = <<-GRAPHQL
      mutation($ids: [Int!], $revisionSetId: Int, $orgId: Int, $comment: String!) {
        rejectRevisions(input: {
          ids: $ids,
          revisionSetId: $revisionSetId,
          organizationId: $orgId,
          comment: $comment
        }) {
          revisions {
            id
            status
          }
        }
      }
    GRAPHQL
  end

  test "editor can reject a revision by id" do
    response = execute_mutation(
      @query,
      variables: { ids: [ @revision.id ], orgId: @org.id, comment: "This revision is not appropriate for the following reasons." },
      user: @editor,
    )
    assert_graphql_success(response)
    revisions = response.dig("data", "rejectRevisions", "revisions")
    assert_not_nil revisions
    assert_equal 1, revisions.length
  end

  test "editor can reject revisions by revision_set_id" do
    rs_id = ActiveRecord::FixtureSet.identify(:rs1)
    response = execute_mutation(
      @query,
      variables: { revisionSetId: rs_id, orgId: @org.id, comment: "Rejecting all revisions in this set for testing." },
      user: @editor,
    )
    assert_graphql_success(response)
    revisions = response.dig("data", "rejectRevisions", "revisions")
    assert_not_nil revisions
  end

  test "revisor can reject own revision" do
    response = execute_mutation(
      @query,
      variables: { ids: [ @revision.id ], orgId: @org.id, comment: "I am rejecting my own revision for valid reasons." },
      user: @curator,
    )
    assert_graphql_success(response)
  end

  test "requires authentication" do
    response = execute_mutation(
      @query,
      variables: { ids: [ @revision.id ], orgId: @org.id, comment: "Testing auth requirement for rejection." },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "non-existent revision fails" do
    response = execute_mutation(
      @query,
      variables: { ids: [ 999999 ], orgId: @org.id, comment: "Trying to reject a non-existent revision." },
      user: @editor,
    )
    assert_graphql_error(response, /revision with id .* does(n't| not) exist/i)
  end

  test "already rejected revision fails" do
    response = execute_mutation(
      @query,
      variables: { ids: [ @rejected_revision.id ], orgId: @org.id, comment: "Trying to reject an already rejected revision." },
      user: @editor,
    )
    assert_graphql_error(response, /already rejected/i)
  end

  test "curator role cannot reject others revisions" do
    response = execute_mutation(
      @query,
      variables: { ids: [ @revision.id ], orgId: @org.id, comment: "Curator attempting to reject someone elses revision." },
      user: @other_curator,
    )
    assert_graphql_error(response, /must be an editor/i)
  end
end
