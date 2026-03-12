require "test_helper"

class SubmitAssertionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @mp = molecular_profiles(:mp1)
    @disease = diseases(:lung_cancer)
    @ei_id = ActiveRecord::FixtureSet.identify(:accepted_ei)
    @submit_assertion_mutation = <<-GRAPHQL
      mutation($fields: AssertionFields!, $comment: String, $organizationId: Int) {
        submitAssertion(input: {
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          assertion {
            id
            status
          }
        }
      }
    GRAPHQL
  end

  def valid_fields(overrides = {})
    {
      description: { value: "Test assertion description for diagnostic use" },
      summary: { value: "Test assertion summary" },
      molecularProfileId: @mp.id,
      variantOrigin: "SOMATIC",
      assertionType: "DIAGNOSTIC",
      significance: "POSITIVE",
      diseaseId: { value: @disease.id },
      assertionDirection: "SUPPORTS",
      phenotypeIds: [],
      therapyIds: [],
      therapyInteractionType: { unset: true },
      ampLevel: { unset: true },
      evidenceItemIds: [ @ei_id ],
      nccnGuidelineId: { unset: true },
      nccnGuidelineVersion: { unset: true },
      acmgCodeIds: [],
      clingenCodeIds: [],
      fdaCompanionTest: { unset: true },
      fdaRegulatoryApproval: { unset: true },
    }.merge(overrides)
  end

  test "requires authentication" do
    response = execute_mutation(
      @submit_assertion_mutation,
      variables: { fields: valid_fields, organizationId: @org.id },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "submits a new assertion" do
    response = execute_mutation(
      @submit_assertion_mutation,
      user: @user ,
      variables: { fields: valid_fields, organizationId: @org.id },
    )
    result = response.dig("data", "submitAssertion", "assertion")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_equal "SUBMITTED", result["status"]
  end

  test "rejects invalid molecular profile id" do
    response = execute_mutation(
      @submit_assertion_mutation,
      user: @user ,
      variables: { fields: valid_fields(molecularProfileId: 999999), organizationId: @org.id },
    )
    assert_graphql_error(response, /molecular profile|not found|does(n't| not) exist/i)
  end
end
