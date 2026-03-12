require "test_helper"

class SuggestGeneVariantRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @variant = variants(:v600e)
    @braf_feature = features(:braf)
    @factor_variant = variants(:msi_factor_v)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: GeneVariantFields!,
        $comment: String,
        $organizationId: Int
      ) {
        suggestGeneVariantRevision(input: {
          id: $id,
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          variant {
            id
            name
          }
          results {
            id
            newlyCreated
            fieldName
            revisionSetId
          }
        }
      }
    GRAPHQL
  end

  def default_fields
    {
      name: "V600E",
      aliases: [],
      hgvsDescriptions: [],
      clinvarIds: { noneFound: true },
      variantTypeIds: [],
      featureId: @braf_feature.id,
      coordinates: {
        referenceBases: { unset: true },
        variantBases: { unset: true },
      },
    }
  end

  test "suggests a gene variant revision" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @variant.id,
        fields: default_fields.merge(
          name: "V600E Updated",
          aliases: [ "p.V600E" ],
        ),
        comment: "Updating variant name and adding an alias.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestGeneVariantRevision")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_not_nil result["variant"]
    assert result["results"].any?, "Expected at least one revision result"
  end

  test "requires authentication" do
    response = execute_mutation(
      @mutation,
      variables: {
        id: @variant.id,
        fields: default_fields,
        comment: "Attempting revision without login.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "rejects non-existent variant" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: 999999,
        fields: default_fields,
        comment: "Trying to revise a non-existent variant.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects wrong variant type" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @factor_variant.id,
        fields: default_fields.merge(featureId: features(:msi).id),
        comment: "Trying to call GeneVariant mutation on a FactorVariant.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /GeneVariant mutation/)
  end

  test "rejects non-existent feature id" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @variant.id,
        fields: default_fields.merge(featureId: 999999),
        comment: "Trying to revise with non-existent feature.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /feature id/)
  end
end
