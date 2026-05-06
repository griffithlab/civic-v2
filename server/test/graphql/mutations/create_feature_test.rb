require "test_helper"

class CreateFeatureTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @create_feature_mutation = <<-GRAPHQL
      mutation($name: String!, $featureType: CreateableFeatureTypes!, $organizationId: Int) {
        createFeature(input: { name: $name, featureType: $featureType, organizationId: $organizationId }) {
          feature {
            id
            name
          }
          new
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @create_feature_mutation,
      variables: { name: "New Factor", featureType: "FACTOR", organizationId: @org.id },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a new factor feature" do
    response = execute_mutation(
      @create_feature_mutation,
      user: @user,
      variables: { name: "New Factor Feature", featureType: "FACTOR", organizationId: @org.id },
    )
    result = response.dig("data", "createFeature")
    assert_not_nil result
    assert result["new"]
    assert_equal "New Factor Feature", result.dig("feature", "name")
  end

  test "returns existing feature if name matches" do
    existing = features(:msi)
    response = execute_mutation(
      @create_feature_mutation,
      user: @user,
      variables: { name: existing.name, featureType: "FACTOR", organizationId: @org.id },
    )
    result = response.dig("data", "createFeature")
    assert_not_nil result
    refute result["new"]
    assert_equal existing.id, result.dig("feature", "id")
  end

  test "rejects blank name" do
    response = execute_mutation(
      @create_feature_mutation,
      user: @user,
      variables: { name: "", featureType: "FACTOR", organizationId: @org.id },
    )
    assert_graphql_error(response, /name|blank|empty/i)
  end

  test "rejects user acting for org they don't belong to" do
    response = execute_mutation(
      @create_feature_mutation,
      user: @user,
      variables: { name: "New Factor", featureType: "FACTOR", organizationId: organizations(:other_org).id },
    )
    assert_graphql_error(response, /cannot perform actions/)
  end
end
