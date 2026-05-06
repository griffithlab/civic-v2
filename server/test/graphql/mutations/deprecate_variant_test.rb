require "test_helper"

class DeprecateVariantTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @org = organizations(:test_org)
    # w88 variant -> mp3 which has no evidence items
    @variant = Variant.find(ActiveRecord::FixtureSet.identify(:w88))
    @deprecated_variant = Variant.find(ActiveRecord::FixtureSet.identify(:deprecated_variant))
    @query = <<-GRAPHQL
      mutation($variantId: Int!, $orgId: Int, $deprecationReason: VariantDeprecationReason!, $comment: String!) {
        deprecateVariant(input: {
          variantId: $variantId,
          organizationId: $orgId,
          deprecationReason: $deprecationReason,
          comment: $comment
        }) {
          variant {
            id
            name
          }
          newlyDeprecatedMolecularProfiles {
            id
          }
        }
      }
    GRAPHQL
  end

  test "editor can deprecate a variant without evidence" do
    response = execute_mutation(
      @query,
      variables: { variantId: @variant.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "This variant is a duplicate and should be deprecated." },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @variant.id, response.dig("data", "deprecateVariant", "variant", "id")
  end

  test "requires authentication" do
    response = execute_mutation(
      @query,
      variables: { variantId: @variant.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Testing authentication requirement." },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "curator cannot deprecate variant (not editor)" do
    response = execute_mutation(
      @query,
      variables: { variantId: @variant.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Curator trying to deprecate a variant." },
      user: @curator,
    )
    assert_graphql_error(response, /must be an editor/i)
  end

  test "cannot deprecate variant with evidence items on MP" do
    # v600e -> mp1 which has submitted_ei and accepted_ei
    v600e = Variant.find(ActiveRecord::FixtureSet.identify(:v600e))
    response = execute_mutation(
      @query,
      variables: { variantId: v600e.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Trying to deprecate variant with evidence items." },
      user: @editor,
    )
    assert_graphql_error(response, /evidence items/i)
  end

  test "cannot deprecate already deprecated variant" do
    @deprecated_variant.single_variant_molecular_profile.update!(deprecated: true)
    response = execute_mutation(
      @query,
      variables: { variantId: @deprecated_variant.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Trying to deprecate an already deprecated variant." },
      user: @editor,
    )
    assert_graphql_error(response, /already deprecated/i)
  end

  test "non-existent variant fails" do
    response = execute_mutation(
      @query,
      variables: { variantId: 999999, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Trying to deprecate non-existent variant." },
      user: @editor,
    )
    assert_graphql_error(response, /variant with id .* does(n't| not) exist/i)
  end
end
