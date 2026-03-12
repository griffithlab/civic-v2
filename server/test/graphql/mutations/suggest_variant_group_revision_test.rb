require "test_helper"

class SuggestVariantGroupRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @source = sources(:pubmed_source)
    @vg = variant_groups(:test_variant_group)
    @variant = variants(:v600e)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: VariantGroupFields!,
        $comment: String!,
        $organizationId: Int
      ) {
        suggestVariantGroupRevision(input: {
          id: $id,
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          variantGroup {
            id
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

  test "suggests a variant group revision" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @vg.id,
        fields: {
          description: { value: "Updated BRAF variant group description." },
          name: "BRAF Variants Updated",
          sourceIds: [ @source.id ],
          variantIds: [ @variant.id ],
        },
        comment: "Updating the variant group with new description and name.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestVariantGroupRevision")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_not_nil result["variantGroup"]
    assert result["results"].any?, "Expected at least one revision result"
  end

  test "requires authentication" do
    response = execute_mutation(
      @mutation,
      variables: {
        id: @vg.id,
        fields: {
          description: { value: "Updated description." },
          name: "BRAF Variants",
          sourceIds: [ @source.id ],
          variantIds: [ @variant.id ],
        },
        comment: "Updating the variant group description.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "rejects non-existent variant group" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: 999999,
        fields: {
          description: { value: "Updated description." },
          name: "Non-existent",
          sourceIds: [ @source.id ],
          variantIds: [ @variant.id ],
        },
        comment: "Trying to revise a non-existent variant group.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-existent source ids" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @vg.id,
        fields: {
          description: { value: "Updated description." },
          name: "BRAF Variants",
          sourceIds: [ 999999 ],
          variantIds: [ @variant.id ],
        },
        comment: "Updating variant group with non-existent source.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /source ids/)
  end
end
