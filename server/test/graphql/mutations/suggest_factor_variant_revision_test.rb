require "test_helper"

class SuggestFactorVariantRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @variant = variants(:msi_factor_v)
    @msi_feature = features(:msi)
    @gene_variant = variants(:v600e)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: FactorVariantFields!,
        $comment: String,
        $organizationId: Int
      ) {
        suggestFactorVariantRevision(input: {
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
      name: "MSI High",
      aliases: [],
      variantTypeIds: [],
      featureId: @msi_feature.id,
      ncitId: { unset: true },
    }
  end

  test "suggests a factor variant revision" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @variant.id,
        fields: default_fields.merge(
          name: "MSI-H",
          aliases: [ "MSI High" ],
          ncitId: { value: "C12345" },
        ),
        comment: "Updating factor variant name and adding NCI thesaurus ID.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestFactorVariantRevision")
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
      user: @user ,
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
      user: @user ,
      variables: {
        id: @gene_variant.id,
        fields: default_fields.merge(featureId: features(:braf).id),
        comment: "Trying to call FactorVariant mutation on a GeneVariant.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /FactorVariant mutation/)
  end

  test "rejects non-existent feature id" do
    response = execute_mutation(
      @mutation,
      user: @user ,
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
