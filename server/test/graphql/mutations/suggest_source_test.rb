require "test_helper"

class SuggestSourceTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @source = sources(:pubmed_source)
    @mp = molecular_profiles(:mp1)
    @disease = diseases(:lung_cancer)
    @suggest_source_mutation = <<-GRAPHQL
      mutation(
        $sourceId: Int!,
        $comment: String!,
        $molecularProfileId: Int,
        $diseaseId: Int,
        $organizationId: Int
      ) {
        suggestSource(input: {
          sourceId: $sourceId,
          comment: $comment,
          molecularProfileId: $molecularProfileId,
          diseaseId: $diseaseId,
          organizationId: $organizationId
        }) {
          sourceSuggestion {
            id
            status
          }
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @suggest_source_mutation,
      variables: {
        sourceId: @source.id,
        comment: "This source has relevant clinical data worth curating.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "suggests a source for curation" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user ,
      variables: {
        sourceId: @source.id,
        comment: "This source has relevant clinical data worth curating.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestSource", "sourceSuggestion")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_equal "NEW", result["status"]
  end

  test "suggests a source with molecular profile and disease" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user ,
      variables: {
        sourceId: @source.id,
        comment: "This source relates to BRAF V600E in lung cancer.",
        molecularProfileId: @mp.id,
        diseaseId: @disease.id,
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestSource", "sourceSuggestion")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
  end

  test "rejects non-existent source id" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user ,
      variables: {
        sourceId: 999999,
        comment: "This source does not exist in the database.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-existent molecular profile id" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user ,
      variables: {
        sourceId: @source.id,
        comment: "This source references a non-existent molecular profile.",
        molecularProfileId: 999999,
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-existent disease id" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user ,
      variables: {
        sourceId: @source.id,
        comment: "This source references a non-existent disease.",
        diseaseId: 999999,
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects comment shorter than 10 characters" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user ,
      variables: {
        sourceId: @source.id,
        comment: "Short",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /10|short|minimum/i)
  end
end
