require "test_helper"

class SuggestAssertionRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @disease = diseases(:lung_cancer)
    @mp = molecular_profiles(:mp1)
    @ei = evidence_items(:submitted_ei)
    @assertion = ::Assertion.find(ActiveRecord::FixtureSet.identify(:submitted_assertion))

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: AssertionFields!,
        $comment: String!,
        $organizationId: Int
      ) {
        suggestAssertionRevision(input: {
          id: $id,
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          assertion {
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

  def default_fields
    {
      description: { value: "Updated assertion description for revision." },
      summary: { value: "Updated assertion summary." },
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
      evidenceItemIds: [ @ei.id ],
      nccnGuidelineId: { unset: true },
      nccnGuidelineVersion: { unset: true },
      acmgCodeIds: [],
      clingenCodeIds: [],
      fdaCompanionTest: { unset: true },
      fdaRegulatoryApproval: { unset: true },
    }
  end

  test "suggests an assertion revision" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @assertion.id,
        fields: default_fields.merge(
          description: { value: "Revised assertion description with updated clinical guidance." },
        ),
        comment: "Updating the assertion with improved clinical guidance.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestAssertionRevision")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_not_nil result["assertion"]
    assert result["results"].any?, "Expected at least one revision result"
  end

  test "requires authentication" do
    response = execute_mutation(
      @mutation,
      variables: {
        id: @assertion.id,
        fields: default_fields,
        comment: "Updating assertion without authentication.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "rejects non-existent assertion" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: 999999,
        fields: default_fields,
        comment: "Trying to revise a non-existent assertion.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-existent disease id" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @assertion.id,
        fields: default_fields.merge(diseaseId: { value: 999999 }),
        comment: "Trying to revise with non-existent disease.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /disease id|not found|does(n't| not) exist/i)
  end

  test "rejects non-existent evidence item ids" do
    response = execute_mutation(
      @mutation,
      user: @user ,
      variables: {
        id: @assertion.id,
        fields: default_fields.merge(evidenceItemIds: [ 999999 ]),
        comment: "Trying to revise with non-existent evidence items.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /evidence item ids|not found|does(n't| not) exist/i)
  end
end
