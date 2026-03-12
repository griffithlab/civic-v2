require "test_helper"

class CreateVariantTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @braf = features(:braf)
    @create_variant_mutation = <<-GRAPHQL
      mutation($name: String!, $featureId: Int!, $organizationId: Int) {
        createVariant(input: { name: $name, featureId: $featureId, organizationId: $organizationId }) {
          variant {
            id
            name
          }
          molecularProfile {
            id
          }
          new
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @create_variant_mutation,
      variables: { name: "V600R", featureId: @braf.id, organizationId: @org.id },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a new variant" do
    response = execute_mutation(
      @create_variant_mutation,
      user: @user ,
      variables: { name: "V600R", featureId: @braf.id, organizationId: @org.id },
    )
    result = response.dig("data", "createVariant")
    assert_not_nil result
    assert result["new"]
    assert_equal "V600R", result.dig("variant", "name")
    assert_not_nil result.dig("molecularProfile", "id")
  end

  test "returns existing variant if name matches" do
    existing = variants(:v600e)
    response = execute_mutation(
      @create_variant_mutation,
      user: @user ,
      variables: { name: existing.name, featureId: @braf.id, organizationId: @org.id },
    )
    result = response.dig("data", "createVariant")
    assert_not_nil result
    refute result["new"]
    assert_equal existing.id, result.dig("variant", "id")
  end

  test "rejects non-existent feature id" do
    response = execute_mutation(
      @create_variant_mutation,
      user: @user ,
      variables: { name: "V600R", featureId: 999999, organizationId: @org.id },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects blank name" do
    response = execute_mutation(
      @create_variant_mutation,
      user: @user ,
      variables: { name: "", featureId: @braf.id, organizationId: @org.id },
    )
    assert_graphql_error(response, /name|blank|empty/i)
  end

  test "rejects user acting for wrong org" do
    response = execute_mutation(
      @create_variant_mutation,
      user: @user ,
      variables: { name: "V600R", featureId: @braf.id, organizationId: organizations(:other_org).id },
    )
    assert_graphql_error(response, /cannot perform actions/i)
  end
end
