require "test_helper"

class SuggestEvidenceItemRevisionTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @org = organizations(:test_org)
    @source = sources(:pubmed_source)
    @disease = diseases(:lung_cancer)
    @mp = molecular_profiles(:mp1)
    @ei = evidence_items(:submitted_ei)

    @mutation = <<-GRAPHQL
      mutation(
        $id: Int!,
        $fields: EvidenceItemFields!,
        $comment: String!,
        $organizationId: Int
      ) {
        suggestEvidenceItemRevision(input: {
          id: $id,
          fields: $fields,
          comment: $comment,
          organizationId: $organizationId
        }) {
          evidenceItem {
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
    # Use PROGNOSTIC/BETTER_OUTCOME to avoid duplicate check against fixture EIs
    # which use DIAGNOSTIC/POSITIVE.
    {
      description: { value: "Updated evidence item description for revision." },
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
    }
  end

  test "suggests an evidence item revision" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @ei.id,
        fields: default_fields.merge(
          description: { value: "Revised evidence item description with more clinical details." },
          rating: 4,
        ),
        comment: "Updating the evidence item with more clinical details.",
        organizationId: @org.id,
      },
    )
    result = response.dig("data", "suggestEvidenceItemRevision")
    assert_not_nil result, "Expected result but got errors: #{response["errors"]&.map { |e| e["message"] }}"
    assert_not_nil result["evidenceItem"]
    assert result["results"].any?, "Expected at least one revision result"
  end

  test "requires authentication" do
    response = execute_mutation(
      @mutation,
      variables: {
        id: @ei.id,
        fields: default_fields,
        comment: "Updating evidence without authentication.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "rejects non-existent evidence item" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: 999999,
        fields: default_fields,
        comment: "Trying to revise a non-existent evidence item.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /does(n't| not) exist/)
  end

  test "rejects non-existent source id" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @ei.id,
        fields: default_fields.merge(sourceId: 999999),
        comment: "Trying to revise with non-existent source.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /source id|not found|does(n't| not) exist/i)
  end

  test "rejects non-existent disease id" do
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @ei.id,
        fields: default_fields.merge(diseaseId: { value: 999999 }),
        comment: "Trying to revise with non-existent disease.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /disease id/)
  end

  test "rejects deprecated molecular profile" do
    mp_deprecated = molecular_profiles(:mp_deprecated)
    response = execute_mutation(
      @mutation,
      user: @user,
      variables: {
        id: @ei.id,
        fields: default_fields.merge(molecularProfileId: mp_deprecated.id),
        comment: "Trying to revise with deprecated molecular profile.",
        organizationId: @org.id,
      },
    )
    assert_graphql_error(response, /molecular profile|deprecated/i)
  end
end
