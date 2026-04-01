require "test_helper"

class DeleteCommentTest < ActiveSupport::TestCase
  def setup
    @curator = users(:curator)
    @editor = users(:editor)
    @org = organizations(:test_org)
    @comment = comments(:curator_comment)
    @delete_comment_mutation = <<-GRAPHQL
      mutation($commentId: Int!, $organizationId: Int) {
        deleteComment(input: { commentId: $commentId, organizationId: $organizationId }) {
          comment {
            id
            deleted
          }
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @delete_comment_mutation,
      variables: { commentId: @comment.id, organizationId: @org.id },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "deletes own comment" do
    response = execute_mutation(
      @delete_comment_mutation,
      user: @curator,
      variables: { commentId: @comment.id, organizationId: @org.id },
    )
    result = response.dig("data", "deleteComment", "comment")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert result["deleted"]
  end

  test "rejects deleting another users comment" do
    response = execute_mutation(
      @delete_comment_mutation,
      user: @editor,
      variables: { commentId: @comment.id, organizationId: @org.id },
    )
    assert_graphql_error(response, /only delete your own/)
  end

  test "rejects non-existent comment id" do
    response = execute_mutation(
      @delete_comment_mutation,
      user: @curator,
      variables: { commentId: 999999, organizationId: @org.id },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects deleting already deleted comment" do
    # Delete it first
    execute_mutation(
      @delete_comment_mutation,
      user: @curator,
      variables: { commentId: @comment.id, organizationId: @org.id },
    )

    # Try deleting again
    response = execute_mutation(
      @delete_comment_mutation,
      user: @curator,
      variables: { commentId: @comment.id, organizationId: @org.id },
    )
    assert_graphql_error(response, /already been deleted/)
  end
end
