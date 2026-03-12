require "test_helper"

class SubmitEvidenceItemTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @mp = molecular_profiles(:mp1)
    @source = sources(:pubmed_source)
    @disease = diseases(:lung_cancer)
    @submit_ei_mutation = <<-GRAPHQL
      mutation($fields: EvidenceItemFields!, $comment: String, $organizationId: Int) {
        submitEvidence(input: {
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          evidenceItem {
            id
            status
          }
        }
      }
    GRAPHQL
  end

  def valid_fields(overrides = {})
    {
      description: { value: "Test evidence item description" },
      molecularProfileId: @mp.id,
      variantOrigin: "SOMATIC",
      sourceId: @source.id,
      evidenceType: "PROGNOSTIC",
      significance: "BETTER_OUTCOME",
      diseaseId: { value: @disease.id },
      evidenceLevel: "B",
      evidenceDirection: "SUPPORTS",
      phenotypeIds: [],
      rating: 3,
      therapyIds: [],
      therapyInteractionType: { unset: true },
    }.merge(overrides)
  end

  test "requires authentication" do
    response = execute_mutation(
      @submit_ei_mutation,
      variables: { fields: valid_fields, organizationId: @org.id },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "submits a new evidence item" do
    response = execute_mutation(
      @submit_ei_mutation,
      user: @user ,
      variables: { fields: valid_fields, organizationId: @org.id },
    )
    result = response.dig("data", "submitEvidence", "evidenceItem")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_equal "SUBMITTED", result["status"]
  end

  test "submits with optional comment" do
    response = execute_mutation(
      @submit_ei_mutation,
      user: @user ,
      variables: {
        fields: valid_fields,
        comment: "This evidence supports the diagnostic use case.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "submitEvidence", "evidenceItem")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
  end

  test "rejects invalid source id" do
    response = execute_mutation(
      @submit_ei_mutation,
      user: @user ,
      variables: { fields: valid_fields(sourceId: 999999), organizationId: @org.id },
    )
    assert_graphql_error(response, /source/i)
  end

  test "rejects invalid molecular profile id" do
    response = execute_mutation(
      @submit_ei_mutation,
      user: @user ,
      variables: { fields: valid_fields(molecularProfileId: 999999), organizationId: @org.id },
    )
    assert_graphql_error(response, /molecular profile/i)
  end

  test "rejects invalid rating" do
    response = execute_mutation(
      @submit_ei_mutation,
      user: @user ,
      variables: { fields: valid_fields(rating: 6), organizationId: @org.id },
    )
    assert_graphql_error(response, /rating|invalid|between/i)
  end
end
