require "test_helper"

class DeprecateFeatureTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @org = organizations(:test_org)
    # msi (factor) feature has no evidence items on its MPs
    @factor_feature = Feature.find(ActiveRecord::FixtureSet.identify(:msi))
    @query = <<-GRAPHQL
      mutation($featureId: Int!, $orgId: Int, $deprecationReason: FeatureDeprecationReason!, $comment: String!) {
        deprecateFeature(input: {
          featureId: $featureId,
          organizationId: $orgId,
          deprecationReason: $deprecationReason,
          comment: $comment
        }) {
          feature {
            id
            name
          }
          newlyDeprecatedVariants {
            id
          }
          newlyDeprecatedMolecularProfiles {
            id
          }
        }
      }
    GRAPHQL
  end

  test "editor can deprecate a factor feature" do
    response = execute_mutation(@query,
      variables: { featureId: @factor_feature.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "This factor feature is a duplicate and should be deprecated." },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @factor_feature.id, response.dig("data", "deprecateFeature", "feature", "id")
  end

  test "requires authentication" do
    response = execute_mutation(@query,
      variables: { featureId: @factor_feature.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Testing authentication requirement." },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "curator cannot deprecate feature (not editor)" do
    response = execute_mutation(@query,
      variables: { featureId: @factor_feature.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Curator trying to deprecate a feature." },
      user: @curator,
    )
    assert_graphql_error(response, /must be an editor/i)
  end

  test "cannot deprecate a Gene feature" do
    braf = Feature.find(ActiveRecord::FixtureSet.identify(:braf))
    response = execute_mutation(@query,
      variables: { featureId: braf.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Trying to deprecate a gene feature." },
      user: @editor,
    )
    assert_graphql_error(response, /gene features may not be manually deprecated/i)
  end

  test "cannot deprecate feature with evidence items" do
    # braf has variants with evidence items — but it's a Gene so it'll hit the Gene check first
    # Use eml4_alk_fusion feature which has a variant on mp_fusion (no EIs)
    # Actually let's test with a feature that has EIs on its MPs
    # The fusion feature eml4_alk_fusion has no EIs, so let's add one temporarily
    fusion_feature = Feature.find(ActiveRecord::FixtureSet.identify(:eml4_alk_fusion))
    mp_fusion = MolecularProfile.find(ActiveRecord::FixtureSet.identify(:mp_fusion))
    EvidenceItem.create!(
      description: "temp evidence for deprecation test",
      disease: Disease.find(ActiveRecord::FixtureSet.identify(:lung_cancer)),
      source: Source.find(ActiveRecord::FixtureSet.identify(:pubmed_source)),
      molecular_profile: mp_fusion,
      status: "submitted",
      evidence_type: 0,
      significance: 4,
      evidence_direction: 0,
      evidence_level: 1,
      variant_origin: 0,
      rating: 3,
    )
    response = execute_mutation(@query,
      variables: { featureId: fusion_feature.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Trying to deprecate feature with evidence items." },
      user: @editor,
    )
    assert_graphql_error(response, /Evidence Items/)
  end

  test "non-existent feature fails" do
    response = execute_mutation(@query,
      variables: { featureId: 999999, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Trying to deprecate non-existent feature." },
      user: @editor,
    )
    assert_graphql_error(response, /feature with id .* does(n't| not) exist/i)
  end
end
