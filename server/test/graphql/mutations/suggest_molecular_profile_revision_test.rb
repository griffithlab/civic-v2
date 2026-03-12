require "test_helper"

class SuggestMolecularProfileRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @source = sources(:pubmed_source)
    @mp = molecular_profiles(:mp1)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: MolecularProfileFields!,
        $comment: String!,
        $organizationId: Int
      ) {
        suggestMolecularProfileRevision(input: {
          id: $id,
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          molecularProfile {
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

  test "suggests a molecular profile revision" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @mp.id,
        fields: {
          description: { value: "Updated molecular profile description." },
          sourceIds: [ @source.id ],
          aliases: [ "BRAF V600E MP" ],
        },
        comment: "Updating the molecular profile description.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestMolecularProfileRevision")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_not_nil result["molecularProfile"]
    assert result["results"].any?, "Expected at least one revision result"
  end

  test "requires authentication" do
    response = execute_mutation(
      @mutation,
      variables: {
        id: @mp.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ @source.id ],
          aliases: [],
        },
        comment: "Updating the molecular profile description.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "rejects non-existent molecular profile" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: 999999,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ @source.id ],
          aliases: [],
        },
        comment: "Trying to revise a non-existent molecular profile.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-existent source ids" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @mp.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ 999999 ],
          aliases: [],
        },
        comment: "Updating MP with non-existent source.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /source ids/)
  end
end
