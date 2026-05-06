require "test_helper"

class CreateFusionVariantTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @fusion_feature = features(:eml4_alk_fusion)
    @braf = features(:braf)
    @create_fusion_variant_mutation = <<-GRAPHQL
      mutation($featureId: Int!, $coordinates: FusionVariantInput!, $organizationId: Int) {
        createFusionVariant(input: {
          featureId: $featureId,
          coordinates: $coordinates,
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
      @create_fusion_variant_mutation,
      variables: {
        featureId: @fusion_feature.id,
        coordinates: { ensemblVersion: 110 },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a new fusion variant with coordinates" do
    response = execute_mutation(
      @create_fusion_variant_mutation,
      user: @user,
      variables: {
        featureId: @fusion_feature.id,
        coordinates: {
          ensemblVersion: 110,
          referenceBuild: "GRCH38",
          fivePrimeTranscript: "ENST00000318522.5",
          fivePrimeExonEnd: 13,
          threePrimeTranscript: "ENST00000389048.3",
          threePrimeExonStart: 20,
        },
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "createFusionVariant")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert result["new"]
  end

  test "rejects non-existent feature id" do
    response = execute_mutation(
      @create_fusion_variant_mutation,
      user: @user,
      variables: {
        featureId: 999999,
        coordinates: { ensemblVersion: 110 },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-fusion feature" do
    response = execute_mutation(
      @create_fusion_variant_mutation,
      user: @user,
      variables: {
        featureId: @braf.id,
        coordinates: { ensemblVersion: 110 },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /not a Fusion Feature/)
  end
end
