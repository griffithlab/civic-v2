require "test_helper"

class FlagEntityTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @feature = features(:braf)
    @flag_entity_mutation = <<-GRAPHQL
      mutation($subject: FlaggableInput!, $comment: String!, $organizationId: Int) {
        flagEntity(input: {
          subject: $subject,
          comment: $comment,
          organizationId: $organizationId
        }) {
          flag {
            id
            state
          }
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @flag_entity_mutation,
      variables: {
        subject: { id: @feature.id, entityType: "FEATURE" },
        comment: "This feature has an issue that needs attention.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "flags a feature" do
    response = execute_mutation(
      @flag_entity_mutation,
      user: @user ,
      variables: {
        subject: { id: @feature.id, entityType: "FEATURE" },
        comment: "This feature has an issue that needs attention.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "flagEntity", "flag")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_equal "OPEN", result["state"]
  end

  test "flags a variant" do
    variant = variants(:v600e)
    response = execute_mutation(
      @flag_entity_mutation,
      user: @user ,
      variables: {
        subject: { id: variant.id, entityType: "VARIANT" },
        comment: "This variant needs review by the editorial team.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "flagEntity", "flag")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
  end

  test "rejects comment shorter than 10 characters" do
    response = execute_mutation(
      @flag_entity_mutation,
      user: @user ,
      variables: {
        subject: { id: @feature.id, entityType: "FEATURE" },
        comment: "Short",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /10|short|minimum/i)
  end

  test "rejects non-existent subject" do
    response = execute_mutation(
      @flag_entity_mutation,
      user: @user ,
      variables: {
        subject: { id: 999999, entityType: "FEATURE" },
        comment: "This entity does not exist but I am flagging it.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist|not found/i)
  end
end
