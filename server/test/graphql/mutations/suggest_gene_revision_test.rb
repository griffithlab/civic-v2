require "test_helper"

class SuggestGeneRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @source = sources(:pubmed_source)
    @braf_feature = features(:braf)
    @msi_feature = features(:msi)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: GeneFields!,
        $comment: String!,
        $organizationId: Int
      ) {
        suggestGeneRevision(input: {
          id: $id,
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          gene {
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

  test "suggests a gene revision" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @braf_feature.id,
        fields: {
          description: { value: "Updated BRAF gene description for revision test." },
          sourceIds: [ @source.id ],
        },
        comment: "Updating the gene description to be more detailed.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestGeneRevision")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_not_nil result["gene"]
    assert result["results"].any?, "Expected at least one revision result"
    assert result["results"].all? { |r| r["newlyCreated"] }, "Expected all results to be newly created"
  end

  test "requires authentication" do
    response = execute_mutation(
      @mutation,
      variables: {
        id: @braf_feature.id,
        fields: {
          description: { value: "Updated BRAF gene description." },
          sourceIds: [ @source.id ],
        },
        comment: "Updating the gene description to be more detailed.",
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
        },
        comment: "Updating a non-existent gene feature.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-gene feature" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @msi_feature.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ @source.id ],
        },
        comment: "Trying to suggest gene revision on a factor feature.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /not a Gene/)
  end

  test "rejects non-existent source ids" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @braf_feature.id,
        fields: {
          description: { value: "Updated description." },
          sourceIds: [ 999999 ],
        },
        comment: "Updating gene with non-existent source.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /source ids/)
  end
end
