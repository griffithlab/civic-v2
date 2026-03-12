require "test_helper"

class UpdateCoiTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @update_coi_mutation = <<-GRAPHQL
      mutation($coiPresent: Boolean!, $statement: String) {
        updateCoi(input: { coiPresent: $coiPresent, statement: $statement }) {
          coiStatement {
            id
            coiPresent
            coiStatement
          }
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @update_coi_mutation,
      variables: { coiPresent: false },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a COI statement with no conflict" do
    response = execute_mutation(
      @update_coi_mutation,
      user: @user,
      variables: { coiPresent: false },
    )
    result = response.dig("data", "updateCoi", "coiStatement")
    assert_not_nil result
    refute result["coiPresent"]
    assert_nil result["coiStatement"]
  end

  test "creates a COI statement with conflict present" do
    response = execute_mutation(
      @update_coi_mutation,
      user: @user,
      variables: {
        coiPresent: true,
        statement: "I work for a pharmaceutical company that makes relevant drugs.",
      },
    )
    result = response.dig("data", "updateCoi", "coiStatement")
    assert_not_nil result
    assert result["coiPresent"]
    assert_equal "I work for a pharmaceutical company that makes relevant drugs.", result["coiStatement"]
  end

  test "rejects COI present without a statement" do
    response = execute_mutation(
      @update_coi_mutation,
      user: @user,
      variables: { coiPresent: true },
    )
    assert_graphql_error(response, /must provide a statement/i)
  end

  test "rejects statement when no COI present" do
    response = execute_mutation(
      @update_coi_mutation,
      user: @user,
      variables: { coiPresent: false, statement: "Some unnecessary statement" },
    )
    assert_graphql_error(response, /no need for a statement/i)
  end

  test "rejects statement shorter than 10 characters" do
    response = execute_mutation(
      @update_coi_mutation,
      user: @user,
      variables: { coiPresent: true, statement: "Short" },
    )
    assert_graphql_error(response, /greater than 10 characters/i)
  end
end
