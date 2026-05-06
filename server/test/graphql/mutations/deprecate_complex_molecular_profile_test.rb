require "test_helper"

class DeprecateComplexMolecularProfileTest < ActiveSupport::TestCase
  def setup
    @editor = users(:editor)
    @curator = users(:curator)
    @org = organizations(:test_org)
    @complex_mp = MolecularProfile.find(ActiveRecord::FixtureSet.identify(:mp_complex))
    @deprecated_complex_mp = MolecularProfile.find(ActiveRecord::FixtureSet.identify(:mp_complex_deprecated))
    @simple_mp = MolecularProfile.find(ActiveRecord::FixtureSet.identify(:mp3))
    @query = <<-GRAPHQL
      mutation($mpId: Int!, $orgId: Int, $deprecationReason: MolecularProfileDeprecationReasonMutationInput!, $comment: String!) {
        deprecateComplexMolecularProfile(input: {
          molecularProfileId: $mpId,
          organizationId: $orgId,
          deprecationReason: $deprecationReason,
          comment: $comment
        }) {
          molecularProfile {
            id
            name
          }
        }
      }
    GRAPHQL
  end

  test "editor can deprecate a complex molecular profile" do
    response = execute_mutation(
      @query,
      variables: { mpId: @complex_mp.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "This complex MP is a duplicate and should be deprecated." },
      user: @editor,
    )
    assert_graphql_success(response)
    assert_equal @complex_mp.id, response.dig("data", "deprecateComplexMolecularProfile", "molecularProfile", "id")
  end

  test "requires authentication" do
    response = execute_mutation(
      @query,
      variables: { mpId: @complex_mp.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Testing authentication requirement." },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "curator cannot deprecate complex MP (not editor)" do
    response = execute_mutation(
      @query,
      variables: { mpId: @complex_mp.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Curator trying to deprecate a complex MP." },
      user: @curator,
    )
    assert_graphql_error(response, /must be an editor/i)
  end

  test "cannot deprecate a simple (non-complex) molecular profile" do
    response = execute_mutation(
      @query,
      variables: { mpId: @simple_mp.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Trying to deprecate a simple molecular profile." },
      user: @editor,
    )
    assert_graphql_error(response, /not a complex molecular profile/i)
  end

  test "cannot deprecate already deprecated complex MP" do
    response = execute_mutation(
      @query,
      variables: { mpId: @deprecated_complex_mp.id, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Trying to deprecate already deprecated MP." },
      user: @editor,
    )
    assert_graphql_error(response, /already deprecated/i)
  end

  test "non-existent molecular profile fails" do
    response = execute_mutation(
      @query,
      variables: { mpId: 999999, orgId: @org.id, deprecationReason: "DUPLICATE", comment: "Trying to deprecate non-existent MP." },
      user: @editor,
    )
    assert_graphql_error(response, /molecular profile with id .* does(n't| not) exist/i)
  end
end
