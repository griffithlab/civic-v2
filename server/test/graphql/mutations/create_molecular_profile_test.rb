require "test_helper"

class CreateMolecularProfileTest < ActiveSupport::TestCase
  def setup
    @variant = variants(:v600e)
    @query_string = <<-GRAPHQL
    mutation {
      createMolecularProfile(
        input: { structure: { variantComponents: [{ variantId: #{@variant.id}, not: false }] } }
      ) {
        molecularProfileId
      }
    }
    GRAPHQL
  end

  test "single variant mp" do
    response = Civic2Schema.execute(@query_string, context: { current_user: users(:curator) })

    mp_id = response["data"]["createMolecularProfile"]["molecularProfileId"]
    mp = MolecularProfile.find(mp_id)
    assert_equal(mp.name, "BRAF V600E")
    assert_equal(mp.variants, [@variant])
  end

  test "must be logged in" do
    response = Civic2Schema.execute(@query_string)
    assert_equal(response["errors"][0]["message"], "You must log in to perform this mutation.")
  end

  test "complex mp" do
    v2 = variants(:v600k)
    v3 = variants(:w88)
    v4 = variants(:v87e)
    query_string = <<-GRAPHQL
    mutation {
      createMolecularProfile(
        input: {
          structure: {
            variantComponents: [
              { variantId: #{@variant.id}, not: false }
              { variantId: #{v2.id}, not: true }
            ]
            booleanOperator: AND
            complexComponents: {
              variantComponents: [
                { variantId: #{v3.id}, not: false }
                { variantId: #{v4.id}, not: false }
              ]
              booleanOperator: OR
            }
          }
        }
      ) {
        molecularProfileId
      }
    }
    GRAPHQL

    response = Civic2Schema.execute(query_string, context: { current_user: users(:curator) })

    mp_id = response["data"]["createMolecularProfile"]["molecularProfileId"]
    mp = MolecularProfile.find(mp_id)
    assert_equal(mp.name, "BRAF V600E AND NOT BRAF V600K AND ( VHL W88* OR VHL V87E (c.260T>A) )")
    assert_equal(mp.variants, [@variant, v2, v3, v4])
  end
end
