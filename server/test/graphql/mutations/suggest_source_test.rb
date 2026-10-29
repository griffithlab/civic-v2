require "test_helper"

class SuggestSourceTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @source = sources(:pubmed_source)
    @mp = molecular_profiles(:mp1)
    @disease = diseases(:lung_cancer)
    @therapy = therapies(:erlotinib)
    @second_therapy = Therapy.create!(name: "Gefitinib")
    @suggest_source_mutation = <<-GRAPHQL
      mutation(
        $sourceId: Int!,
        $comment: String!,
        $molecularProfileId: Int,
        $diseaseId: Int,
        $therapyIds: [Int!]!,
        $therapyInteractionType: TherapyInteraction,
        $organizationId: Int
      ) {
        suggestSource(input: {
          sourceId: $sourceId,
          comment: $comment,
          molecularProfileId: $molecularProfileId,
          diseaseId: $diseaseId,
          therapyIds: $therapyIds,
          therapyInteractionType: $therapyInteractionType,
          organizationId: $organizationId
        }) {
          sourceSuggestion {
            id
            status
            therapies {
              id
            }
            therapyInteractionType
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
        therapyIds: [],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "suggests a source for curation" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: @source.id,
        comment: "This source has relevant clinical data worth curating.",
        therapyIds: [],
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestSource", "sourceSuggestion")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_equal "NEW", result["status"]
  end

  test "suggests a source with molecular profile, disease, and therapies" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: @source.id,
        comment: "This source relates to BRAF V600E in lung cancer.",
        molecularProfileId: @mp.id,
        diseaseId: @disease.id,
        therapyIds: [ @therapy.id ],
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestSource", "sourceSuggestion")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_equal [ @therapy.id ], result["therapies"].map { |t| t["id"] }
    assert_equal [ @therapy.id ], SourceSuggestion.find(result["id"]).therapy_ids
  end

  test "suggests a source with multiple therapies and an interaction type" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: @source.id,
        comment: "This source describes a combination therapy.",
        therapyIds: [ @therapy.id, @second_therapy.id ],
        therapyInteractionType: "COMBINATION",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestSource", "sourceSuggestion")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_equal [ @therapy.id, @second_therapy.id ].sort, result["therapies"].map { |t| t["id"] }.sort
    assert_equal "COMBINATION", result["therapyInteractionType"]
    assert_equal "Combination", SourceSuggestion.find(result["id"]).therapy_interaction_type
  end

  test "rejects multiple therapies without an interaction type" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: @source.id,
        comment: "This source describes multiple therapies.",
        therapyIds: [ @therapy.id, @second_therapy.id ],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /multiple therapies.*interaction type/i)
  end

  test "rejects an interaction type with fewer than two distinct therapies" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: @source.id,
        comment: "This source describes one therapy.",
        therapyIds: [ @therapy.id, @therapy.id ],
        therapyInteractionType: "COMBINATION",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /cannot be set unless multiple therapies/i)
  end

  test "rejects non-existent source id" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: 999999,
        comment: "This source does not exist in the database.",
        therapyIds: [],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-existent molecular profile id" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: @source.id,
        comment: "This source references a non-existent molecular profile.",
        molecularProfileId: 999999,
        therapyIds: [],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-existent disease id" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: @source.id,
        comment: "This source references a non-existent disease.",
        diseaseId: 999999,
        therapyIds: [],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-existent therapy id" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: @source.id,
        comment: "This source references a non-existent therapy.",
        therapyIds: [ 999999 ],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /do not exist|does(n't| not) exist/)
  end

  test "filters source suggestions by any therapy name" do
    suggestion = SourceSuggestion.create!(
      source: @source,
      user: @user,
      status: "new",
      initial_comment: "This source relates to a therapy.",
      therapy_ids: [ @therapy.id ],
    )

    query = <<-GRAPHQL
      query($therapyName: String) {
        sourceSuggestions(therapyName: $therapyName) {
          edges {
            node {
              id
            }
          }
        }
      }
    GRAPHQL

    matching_response = execute_mutation(query, variables: { therapyName: "erlot" })
    assert_graphql_success(matching_response)
    matching_ids = matching_response.dig("data", "sourceSuggestions", "edges").map { |e| e.dig("node", "id") }
    assert_includes matching_ids, suggestion.id

    non_matching_response = execute_mutation(query, variables: { therapyName: "imatinib" })
    assert_graphql_success(non_matching_response)
    non_matching_ids = non_matching_response.dig("data", "sourceSuggestions", "edges").map { |e| e.dig("node", "id") }
    refute_includes non_matching_ids, suggestion.id
  end

  test "rejects comment shorter than 10 characters" do
    response = execute_mutation(
      @suggest_source_mutation,
      user: @user,
      variables: {
        sourceId: @source.id,
        comment: "Short",
        therapyIds: [],
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /10|short|minimum/i)
  end
end
