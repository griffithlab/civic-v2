require "test_helper"

class CreateFusionFeatureTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @braf = features(:braf)
    @alk = features(:alk)
    @eml4 = features(:eml4)
    @create_fusion_mutation = <<-GRAPHQL
      mutation(
        $fivePrimeGene: FusionPartnerInput!,
        $threePrimeGene: FusionPartnerInput!,
        $organizationId: Int
      ) {
        createFusionFeature(input: {
          fivePrimeGene: $fivePrimeGene,
          threePrimeGene: $threePrimeGene,
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
      @create_fusion_mutation,
      variables: {
        fivePrimeGene: { partnerStatus: "KNOWN", geneId: @eml4.id },
        threePrimeGene: { partnerStatus: "KNOWN", geneId: @alk.id },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "creates a new fusion feature" do
    response = execute_mutation(
      @create_fusion_mutation,
      user: @user ,
      variables: {
        fivePrimeGene: { partnerStatus: "KNOWN", geneId: @braf.id },
        threePrimeGene: { partnerStatus: "KNOWN", geneId: @alk.id },
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "createFusionFeature")
    assert_not_nil result
    assert result["new"]
  end

  test "returns existing fusion feature if it exists" do
    # The eml4_alk fusion exists as a fixture
    eml4_alk_feature = features(:eml4_alk_fusion)
    response = execute_mutation(
      @create_fusion_mutation,
      user: @user ,
      variables: {
        fivePrimeGene: { partnerStatus: "KNOWN", geneId: @eml4.id },
        threePrimeGene: { partnerStatus: "KNOWN", geneId: @alk.id },
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "createFusionFeature")
    assert_not_nil result
    refute result["new"]
    assert_equal eml4_alk_feature.id, result.dig("feature", "id")
  end

  test "rejects both partners being blank" do
    response = execute_mutation(
      @create_fusion_mutation,
      user: @user ,
      variables: {
        fivePrimeGene: { partnerStatus: "UNKNOWN" },
        threePrimeGene: { partnerStatus: "UNKNOWN" },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /One or both fusion partners/)
  end

  test "rejects identical gene IDs" do
    response = execute_mutation(
      @create_fusion_mutation,
      user: @user ,
      variables: {
        fivePrimeGene: { partnerStatus: "KNOWN", geneId: @alk.id },
        threePrimeGene: { partnerStatus: "KNOWN", geneId: @alk.id },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /cannot be identical/)
  end

  test "rejects known status without gene_id" do
    response = execute_mutation(
      @create_fusion_mutation,
      user: @user ,
      variables: {
        fivePrimeGene: { partnerStatus: "KNOWN" },
        threePrimeGene: { partnerStatus: "KNOWN", geneId: @alk.id },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /can't be 'known'/)
  end

  test "rejects gene_id with non-known status" do
    response = execute_mutation(
      @create_fusion_mutation,
      user: @user ,
      variables: {
        fivePrimeGene: { partnerStatus: "UNKNOWN", geneId: @eml4.id },
        threePrimeGene: { partnerStatus: "KNOWN", geneId: @alk.id },
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /needs to be 'known'/)
  end
end
