require "test_helper"

class SuggestFusionRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @source = sources(:pubmed_source)
    @fusion_feature = features(:eml4_alk_fusion)
    @braf_feature = features(:braf)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: FusionFields!,
        $comment: String!,
        $organizationId: Int
      ) {
        suggestFusionRevision(input: {
          id: $id,
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          fusion {
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

  test "suggests a fusion revision" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @fusion_feature.id,
        fields: {
          description: { value: "Updated EML4-ALK fusion description." },
          sourceIds: [ @source.id ],
          aliases: [ "EML4-ALK" ],
          knownPartnerGeneIds: [],
        },
        comment: "Updating the fusion description for more clarity.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestFusionRevision")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_not_nil result["fusion"]
    assert result["results"].any?, "Expected at least one revision result"
  end

  test "requires authentication" do
    response = execute_mutation(
      @mutation,
      variables: {
        id: @fusion_feature.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ @source.id ],
          aliases: [],
          knownPartnerGeneIds: [],
        },
        comment: "Updating the fusion description for more clarity.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "rejects non-existent feature" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: 999999,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ @source.id ],
          aliases: [],
          knownPartnerGeneIds: [],
        },
        comment: "Trying to revise a non-existent fusion.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-fusion feature" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @braf_feature.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ @source.id ],
          aliases: [],
          knownPartnerGeneIds: [],
        },
        comment: "Trying to suggest fusion revision on a gene feature.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /not a Fusion/)
  end

  test "rejects non-existent source ids" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @fusion_feature.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ 999999 ],
          aliases: [],
          knownPartnerGeneIds: [],
        },
        comment: "Updating fusion with non-existent source.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /source ids/)
  end
end
