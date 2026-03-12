require "test_helper"

class AcceptRevisionsTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @other_curator = users(:other_curator)
    @no_coi_editor = users(:no_coi_editor)
    @editor_submitter = users(:editor_submitter)
    @org = organizations(:test_org)
    @revision = Revision.find(ActiveRecord::FixtureSet.identify(:new_revision))
    @accepted_revision = Revision.find(ActiveRecord::FixtureSet.identify(:accepted_revision))
    @query = <<-GRAPHQL
      mutation($ids: [Int!], $revisionSetId: Int, $orgId: Int, $comment: String) {
        acceptRevisions(input: {
          ids: $ids,
          revisionSetId: $revisionSetId,
          organizationId: $orgId,
          comment: $comment
        }) {
          revisions {
            id
            status
          }
          supersededRevisions {
            id
          }
        }
      }
    GRAPHQL
  end

  test "editor can accept a revision by id" do
    response = execute_mutation(
      @query,
      variables: { ids: [ @revision.id ], orgId: @org.id },
      user: @editor,
    )
    assert_graphql_success(response)
    revisions = response.dig("data", "acceptRevisions", "revisions")
    assert_not_nil revisions
    assert_equal 1, revisions.length
  end

  test "editor can accept revisions by revision_set_id" do
    rs_id = ActiveRecord::FixtureSet.identify(:rs1)
    response = execute_mutation(
      @query,
      variables: { revisionSetId: rs_id, orgId: @org.id },
      user: @editor,
    )
    assert_graphql_success(response)
    revisions = response.dig("data", "acceptRevisions", "revisions")
    assert_not_nil revisions
  end

  test "requires authentication" do
    response = execute_mutation(@query, variables: { ids: [ @revision.id ], orgId: @org.id })
    assert_graphql_error(response, /must log in/i)
  end

  test "non-existent revision fails" do
    response = execute_mutation(
      @query,
      variables: { ids: [ 999999 ], orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /revision with id .* does(n't| not) exist/i)
  end

  test "already accepted revision fails" do
    response = execute_mutation(
      @query,
      variables: { ids: [ @accepted_revision.id ], orgId: @org.id },
      user: @editor,
    )
    assert_graphql_error(response, /already accepted/i)
  end

  test "revisor cannot accept own revision" do
    rev = Revision.find(ActiveRecord::FixtureSet.identify(:editor_submitter_revision_on_accepted))
    response = execute_mutation(
      @query,
      variables: { ids: [ rev.id ], orgId: @org.id },
      user: @editor_submitter,
    )
    assert_graphql_error(response, /may not accept their own suggested revision/i)
  end

  test "curator role cannot accept revisions" do
    response = execute_mutation(
      @query,
      variables: { ids: [ @revision.id ], orgId: @org.id },
      user: @other_curator,
    )
    assert_graphql_error(response, /must be an editor/i)
  end

  test "editor without COI statement cannot accept" do
    response = execute_mutation(
      @query,
      variables: { ids: [ @revision.id ], orgId: @org.id },
      user: @no_coi_editor,
    )
    assert_graphql_error(response, /must have a valid conflict of interest statement/i)
  end
end
