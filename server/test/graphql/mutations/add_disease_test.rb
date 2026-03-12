require "test_helper"

class AddDiseaseTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @add_disease_mutation = <<-GRAPHQL
      mutation($name: String!, $doid: String) {
        addDisease(input: { name: $name, doid: $doid }) {
          disease {
            id
            name
            displayName
            doid
          }
          new
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(@add_disease_mutation, variables: { name: "Test Disease" })
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a new disease by name" do
    response = execute_mutation(
      @add_disease_mutation,
      user: @user ,
      variables: { name: "adrenal cortex carcinoma" },
    )
    result = response.dig("data", "addDisease")
    assert_not_nil result
    assert result["new"]
    assert_equal "Adrenal Cortex Carcinoma", result.dig("disease", "displayName")
  end

  test "returns existing disease when name matches case-insensitively" do
    existing = diseases(:lung_cancer)
    response = execute_mutation(
      @add_disease_mutation,
      user: @user ,
      variables: { name: existing.name },
    )
    result = response.dig("data", "addDisease")
    assert_not_nil result
    refute result["new"]
    assert_equal existing.id, result.dig("disease", "id")
  end

  test "creates a new disease with doid" do
    response = execute_mutation(
      @add_disease_mutation,
      user: @user ,
      variables: { name: "adrenal cortex carcinoma", doid: "3948" },
    )
    result = response.dig("data", "addDisease")
    assert_not_nil result
    assert result["new"]
    assert_equal "3948", result.dig("disease", "doid")
  end

  test "returns existing disease when doid matches" do
    existing = diseases(:lung_cancer)
    response = execute_mutation(
      @add_disease_mutation,
      user: @user ,
      variables: { name: "anything", doid: existing.doid },
    )
    result = response.dig("data", "addDisease")
    assert_not_nil result
    refute result["new"]
    assert_equal existing.id, result.dig("disease", "id")
  end

  test "rejects name shorter than 5 characters" do
    response = execute_mutation(
      @add_disease_mutation,
      user: @user ,
      variables: { name: "ab" },
    )
    assert_graphql_error(response, /name|5|minimum/i)
  end

  test "rejects invalid doid format" do
    response = execute_mutation(
      @add_disease_mutation,
      user: @user ,
      variables: { name: "Valid Disease Name", doid: "INVALID" },
    )
    assert_graphql_error(response, /doid|format|invalid/i)
  end
end
