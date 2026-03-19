require "test_helper"

class AddTherapyTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @add_therapy_mutation = <<-GRAPHQL
      mutation($name: String!, $ncitId: String) {
        addTherapy(input: { name: $name, ncitId: $ncitId }) {
          therapy {
            id
            name
            ncitId
          }
          new
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(@add_therapy_mutation, variables: { name: "Imatinib" })
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a new therapy by name" do
    response = execute_mutation(
      @add_therapy_mutation,
      user: @user,
      variables: { name: "imatinib" },
    )
    result = response.dig("data", "addTherapy")
    assert_not_nil result
    assert result["new"]
    assert_equal "Imatinib", result.dig("therapy", "name")
  end

  test "returns existing therapy when name matches case-insensitively" do
    existing = therapies(:erlotinib)
    response = execute_mutation(
      @add_therapy_mutation,
      user: @user,
      variables: { name: existing.name.downcase },
    )
    result = response.dig("data", "addTherapy")
    assert_not_nil result
    refute result["new"]
    assert_equal existing.id, result.dig("therapy", "id")
  end

  test "creates a new therapy with ncit_id" do
    response = execute_mutation(
      @add_therapy_mutation,
      user: @user,
      variables: { name: "imatinib", ncitId: "C12345" },
    )
    result = response.dig("data", "addTherapy")
    assert_not_nil result
    assert result["new"]
  end

  test "returns existing therapy when ncit_id matches" do
    existing = therapies(:erlotinib)
    response = execute_mutation(
      @add_therapy_mutation,
      user: @user,
      variables: { name: "anything", ncitId: "NCIT:#{existing.ncit_id}" },
    )
    result = response.dig("data", "addTherapy")
    assert_not_nil result
    refute result["new"]
    assert_equal existing.id, result.dig("therapy", "id")
  end

  test "rejects name shorter than 3 characters" do
    response = execute_mutation(
      @add_therapy_mutation,
      user: @user,
      variables: { name: "ab" },
    )
    assert_graphql_error(response, /name|3|minimum/i)
  end
end
