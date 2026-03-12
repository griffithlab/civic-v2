require "test_helper"

class CreateRegionFeatureTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @chr7 = cytogenetic_regions(:chr7_whole)
    @create_region_mutation = <<-GRAPHQL
      mutation($cytogeneticRegionIds: [Int!]!, $organizationId: Int) {
        createRegionFeature(input: {
          cytogeneticRegionIds: $cytogeneticRegionIds,
          organizationId: $organizationId
        }) {
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
      @create_region_mutation,
      variables: { cytogeneticRegionIds: [ @chr7.id ], organizationId: @org.id },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "returns existing region feature if it matches" do
    existing = features(:chr7_region)
    response = execute_mutation(
      @create_region_mutation,
      user: @user ,
      variables: { cytogeneticRegionIds: [ @chr7.id ], organizationId: @org.id },
    )
    result = response.dig("data", "createRegionFeature")
    assert_not_nil result
    refute result["new"]
    assert_equal existing.id, result.dig("feature", "id")
  end

  test "rejects invalid cytogenetic region ids" do
    response = execute_mutation(
      @create_region_mutation,
      user: @user ,
      variables: { cytogeneticRegionIds: [ 999999 ], organizationId: @org.id },
    )
    assert_graphql_error(response, /Invalid cytogenetic region ids/)
  end

  test "rejects duplicate region ids" do
    # When duplicates are sent, the WHERE query returns fewer records than the input array
    # so the existence check fires first with a confusing error, or the uniqueness check
    # fires. Either way we get an error.
    response = execute_mutation(
      @create_region_mutation,
      user: @user ,
      variables: { cytogeneticRegionIds: [ @chr7.id, @chr7.id ], organizationId: @org.id },
    )
    assert_graphql_error(response, /cytogenetic region ids|duplicate|invalid/i)
  end
end
