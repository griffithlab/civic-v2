require "test_helper"

class AddCommentTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @ei_id = ActiveRecord::FixtureSet.identify(:submitted_ei)
    @add_comment_mutation = <<-GRAPHQL
      mutation($body: String!, $title: String, $subject: CommentableInput!, $organizationId: Int) {
        addComment(input: {
          body: $body,
          title: $title,
          subject: $subject,
          organizationId: $organizationId
        }) {
          comment {
            id
            comment
            title
          }
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @add_comment_mutation,
      variables: {
        body: "This is a test comment body.",
        subject: { id: @ei_id, entityType: "EVIDENCE_ITEM" },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "adds a comment to an evidence item" do
    response = execute_mutation(
      @add_comment_mutation,
      user: @user,
      variables: {
        body: "This is a useful comment about the evidence.",
        title: "My Comment",
        subject: { id: @ei_id, entityType: "EVIDENCE_ITEM" },
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "addComment", "comment")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_equal "This is a useful comment about the evidence.", result["comment"]
    assert_equal "My Comment", result["title"]
  end

  test "adds a comment to a feature" do
    feature = features(:braf)
    response = execute_mutation(
      @add_comment_mutation,
      user: @user,
      variables: {
        body: "Important note about this gene feature.",
        subject: { id: feature.id, entityType: "FEATURE" },
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "addComment", "comment")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
  end

  test "rejects comment body shorter than 10 characters" do
    response = execute_mutation(
      @add_comment_mutation,
      user: @user,
      variables: {
        body: "Short",
        subject: { id: @ei_id, entityType: "EVIDENCE_ITEM" },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /10|short|minimum/i)
  end

  test "rejects non-existent subject" do
    response = execute_mutation(
      @add_comment_mutation,
      user: @user,
      variables: {
        body: "This is a long enough comment body.",
        subject: { id: 999999, entityType: "EVIDENCE_ITEM" },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist|not found/i)
  end
end
