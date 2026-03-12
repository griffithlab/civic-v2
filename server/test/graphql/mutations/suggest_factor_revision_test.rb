require "test_helper"

class SuggestFactorRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @source = sources(:pubmed_source)
    @msi_feature = features(:msi)
    @braf_feature = features(:braf)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: FactorFields!,
        $comment: String!,
        $organizationId: Int
      ) {
        suggestFactorRevision(input: {
          id: $id,
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          factor {
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

  test "suggests a factor revision" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @msi_feature.id,
        fields: {
          description: { value: "Updated MSI factor description for revision." },
          name: "MSI",
          fullName: { value: "Microsatellite Instability Updated" },
          ncitId: { value: "C12345" },
          sourceIds: [ @source.id ],
          aliases: [ "MSI-H" ],
        },
        comment: "Updating the factor description with more details.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestFactorRevision")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_not_nil result["factor"]
    assert result["results"].any?, "Expected at least one revision result"
  end

  test "requires authentication" do
    response = execute_mutation(
      @mutation,
      variables: {
        id: @msi_feature.id,
        fields: {
          description: { value: "Updated description." },
          name: "MSI",
          fullName: { value: "Microsatellite Instability" },
          ncitId: { unset: true },
          sourceIds: [ @source.id ],
          aliases: [],
        },
        comment: "Updating the factor description with more details.",
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
          name: "MSI",
          fullName: { unset: true },
          ncitId: { unset: true },
          sourceIds: [ @source.id ],
          aliases: [],
        },
        comment: "Trying to revise a non-existent factor.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-factor feature" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @braf_feature.id,
        fields: {
          description: { value: "Updated description." },
          name: "BRAF",
          fullName: { unset: true },
          ncitId: { unset: true },
          sourceIds: [ @source.id ],
          aliases: [],
        },
        comment: "Trying to suggest factor revision on a gene feature.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /not a Factor/)
  end

  test "rejects non-existent source ids" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @msi_feature.id,
        fields: {
          description: { value: "Updated description." },
          name: "MSI",
          fullName: { unset: true },
          ncitId: { unset: true },
          sourceIds: [ 999999 ],
          aliases: [],
        },
        comment: "Updating factor with non-existent source.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /source ids/)
  end
end
