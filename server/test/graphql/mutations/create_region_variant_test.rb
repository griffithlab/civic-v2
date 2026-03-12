require "test_helper"

class CreateRegionVariantTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @region_feature = features(:chr7_region)
    @braf = features(:braf)
    @create_region_variant_mutation = <<-GRAPHQL
      mutation($featureId: Int!, $name: RegionVariantName!, $organizationId: Int) {
        createRegionVariant(input: {
          featureId: $featureId,
          name: $name,
          organizationId: $organizationId
        }) {
          variant {
            __typename
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
      @create_region_variant_mutation,
      variables: {
        featureId: @region_feature.id,
        name: "DELETION",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a new region variant" do
    response = execute_mutation(
      @create_region_variant_mutation,
      user: @user ,
      variables: {
        featureId: @region_feature.id,
        name: "AMPLIFICATION",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "createRegionVariant")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert result["new"]
  end

  test "returns existing variant if iscn name matches" do
    # The chr7_trisomy variant already exists
    existing = variants(:chr7_trisomy)
    response = execute_mutation(
      @create_region_variant_mutation,
      user: @user ,
      variables: {
        featureId: @region_feature.id,
        name: "TRISOMY",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "createRegionVariant")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    refute result["new"]
  end

  test "rejects non-existent feature id" do
    response = execute_mutation(
      @create_region_variant_mutation,
      user: @user ,
      variables: {
        featureId: 999999,
        name: "AMPLIFICATION",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-region feature" do
    response = execute_mutation(
      @create_region_variant_mutation,
      user: @user ,
      variables: {
        featureId: @braf.id,
        name: "AMPLIFICATION",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /not a Region Feature/)
  end
end
