require "test_helper"

class SuggestRegionRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @source = sources(:pubmed_source)
    @region_feature = features(:chr7_region)
    @braf_feature = features(:braf)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: RegionFields!,
        $comment: String!,
        $organizationId: Int
      ) {
        suggestRegionRevision(input: {
          id: $id,
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          region {
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

  test "suggests a region revision" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @region_feature.id,
        fields: {
          description: { value: "Updated chromosome 7 region description." },
          sourceIds: [ @source.id ],
          aliases: [ "Chr7" ],
        },
        comment: "Updating the region description for more detail.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestRegionRevision")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_not_nil result["region"]
    assert result["results"].any?, "Expected at least one revision result"
  end

  test "requires authentication" do
    response = execute_mutation(
      @mutation,
      variables: {
        id: @region_feature.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ @source.id ],
          aliases: [],
        },
        comment: "Updating the region description for more detail.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "rejects non-existent feature" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: 999999,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ @source.id ],
          aliases: [],
        },
        comment: "Trying to revise a non-existent region.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-region feature" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @braf_feature.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ @source.id ],
          aliases: [],
        },
        comment: "Trying to suggest region revision on a gene feature.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /not a Region/)
  end

  test "rejects non-existent source ids" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @region_feature.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ 999999 ],
          aliases: [],
        },
        comment: "Updating region with non-existent source.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /source ids/)
  end
end
