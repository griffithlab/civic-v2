require "test_helper"

# This test verifies the assertion advanced search functionality
class AssertionSearchFilterTest < ActiveSupport::TestCase
  test "search assertions with therapy interaction type filter" do
    query_string = <<~GRAPHQL
      {
        searchAssertions(
          query: {
            therapyInteractionType: {
              comparisonOperator: IS_NOT_NULL
            }
          }
        ) {
          results {
            id
            ... on Assertion {
              name
              therapyInteractionType
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Skip the test if there are no results (no assertions with therapy interaction types in the test database)
    skip "No assertions with therapy interaction types found in the test database" unless result.dig("data", "searchAssertions", "results").size.positive?

    # Verify all results have a therapy interaction type
    result.dig("data", "searchAssertions", "results").each do |assertion|
      assert_not_nil assertion["therapyInteractionType"]
    end
  end

  test "search assertions with ACMG codes filter" do
    query_string = <<~GRAPHQL
      {
        searchAssertions(
          query: {
            acmgCodes: {
              comparisonOperator: CONTAINS
              value: "PVS1"
            }
          }
        ) {
          results {
            id
            ... on Assertion {
              name
              acmgCodes {
                name
              }
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Verify all results have the PVS1 ACMG code
    result.dig("data", "searchAssertions", "results").each do |assertion|
      acmg_codes = assertion["acmgCodes"].map { |code| code["name"] }
      assert_includes acmg_codes, "PVS1"
    end
  end

  test "search assertions with ClinGen codes filter" do
    query_string = <<~GRAPHQL
      {
        searchAssertions(
          query: {
            clingenCodes: {
              comparisonOperator: CONTAINS
              value: "BP"
            }
          }
        ) {
          results {
            id
            ... on Assertion {
              name
              clingenCodes {
                name
              }
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Verify all results have a ClinGen code containing "BP"
    result.dig("data", "searchAssertions", "results").each do |assertion|
      clingen_codes = assertion["clingenCodes"].map { |code| code["name"] }
      assert clingen_codes.any? { |code| code.include?("BP") }
    end
  end

  test "search assertions with complex boolean filters" do
    # This test replicates the existing test_assertion_search.rb script
    query_string = <<~GRAPHQL
      {
        searchAssertions(
          query: {
            subFilters: [
              {
                therapyInteractionType: {
                  comparisonOperator: IS_NOT_NULL
                }
                booleanOperator: AND
              },
              {
                acmgCodes: {
                  comparisonOperator: CONTAINS
                  value: "PVS1"
                }
                booleanOperator: OR
              },
              {
                clingenCodes: {
                  comparisonOperator: CONTAINS
                  value: "BP"
                }
                booleanOperator: OR
              }
            ]
            booleanOperator: OR
          }
          createPermalink: true
        ) {
          resultIds
          results {
            id
            ... on Assertion {
              name
              description
              summary
              significance
              status
              assertionType
              assertionDirection
              ampLevel
              variantOrigin
              therapies {
                name
              }
              acmgCodes {
                name
              }
              clingenCodes {
                name
              }
              therapyInteractionType
            }
          }
          searchEndpoint
          permalinkId
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]
    assert_not_nil result.dig("data", "searchAssertions", "permalinkId")

    # Verify the results match at least one of the filter criteria
    result.dig("data", "searchAssertions", "results").each do |assertion|
      has_therapy_interaction = !assertion["therapyInteractionType"].nil?
      has_pvs1 = assertion["acmgCodes"].any? { |code| code["name"] == "PVS1" }
      has_bp_code = assertion["clingenCodes"].any? { |code| code["name"].include?("BP") }

      assert(has_therapy_interaction || has_pvs1 || has_bp_code)
    end
  end

  test "search assertions with significance filter" do
    query_string = <<~GRAPHQL
      {
        searchAssertions(
          query: {
            significance: {
              comparisonOperator: EQ
              value: PATHOGENIC
            }
          }
        ) {
          results {
            id
            ... on Assertion {
              name
              significance
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Verify all results have the correct significance
    result.dig("data", "searchAssertions", "results").each do |assertion|
      assert_equal "pathogenic", assertion["significance"]
    end
  end

  test "search assertions with regulatory approval filters" do
    query_string = <<~GRAPHQL
      {
        searchAssertions(
          query: {
            hasFdaRegulatoryApproval: {
              comparisonOperator: EQ
              value: true
            }
          }
        ) {
          results {
            id
            ... on Assertion {
              name
              regulatoryApproval
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Verify all results have FDA regulatory approval
    result.dig("data", "searchAssertions", "results").each do |assertion|
      assert assertion["regulatoryApproval"]
    end
  end
end
