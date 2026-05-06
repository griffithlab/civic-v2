require "test_helper"

class SuggestRegionVariantRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @variant = variants(:chr7_trisomy)
    @gene_variant = variants(:v600e)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: RegionVariantFields!,
        $comment: String,
        $organizationId: Int
      ) {
        suggestRegionVariantRevision(input: {
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
      aliases: [],
      variantTypeIds: [],
    }
  end

  test "suggests a region variant revision" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @variant.id,
        fields: default_fields.merge(
          aliases: [ "+7", "Trisomy 7" ],
        ),
        comment: "Adding aliases to the region variant.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestRegionVariantRevision")
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
        id: @gene_variant.id,
        fields: default_fields,
        comment: "Trying to call RegionVariant mutation on a GeneVariant.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /RegionVariant mutation/)
  end
end
