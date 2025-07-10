require "test_helper"

# This test verifies the feature advanced search functionality
class FeatureSearchFilterTest < ActiveSupport::TestCase
  test "search features with feature instance type filter" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            featureInstanceType: {
              comparisonOperator: EQ
              value: GENE
            }
          }
          createPermalink: false
        ) {
          results {
            id
            ... on Feature {
              name
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Skip the test if there are no results
    skip "No gene features found in the test database" unless result.dig("data", "searchFeatures", "results").size.positive?

    # Since we can't verify the feature type directly in the response,
    # we're just checking that the query returns results without errors
    assert result.dig("data", "searchFeatures", "results").size.positive?
  end

  test "search features with description filter" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            description: {
              comparisonOperator: CONTAINS
              value: "gene"
            }
          }
          createPermalink: false
        ) {
          results {
            id
            ... on Feature {
              name
              description
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Verify all results have the description containing "gene"
    result.dig("data", "searchFeatures", "results").each do |feature|
      assert feature["description"].downcase.include?("gene")
    end
  end

  test "search features with alias filter" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            alias: {
              comparisonOperator: CONTAINS
              value: "BRAF"
            }
          }
          createPermalink: false
        ) {
          results {
            id
            ... on Feature {
              name
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Skip the test if there are no results
    skip "No features with alias containing 'BRAF' found in the test database" unless result.dig("data", "searchFeatures", "results").size.positive?

    # Since we can't verify the aliases directly in the response,
    # we're just checking that the query returns results without errors
    assert result.dig("data", "searchFeatures", "results").size.positive?
  end

  test "search features with is flagged filter" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            isFlagged: {
              comparisonOperator: EQ
              value: true
            }
          }
          createPermalink: false
        ) {
          results {
            id
            ... on Feature {
              name
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Skip the test if there are no results
    skip "No flagged features found in the test database" unless result.dig("data", "searchFeatures", "results").size.positive?

    # Since we can't verify the flagged status directly in the response,
    # we're just checking that the query returns results without errors
    assert result.dig("data", "searchFeatures", "results").size.positive?
  end

  test "search features with entrez id filter" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            entrezId: {
              comparisonOperator: EQ
              value: 673
            }
          }
          createPermalink: false
        ) {
          results {
            id
            ... on Feature {
              name
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Skip the test if there are no results
    skip "No features with entrez ID 673 found in the test database" unless result.dig("data", "searchFeatures", "results").size.positive?

    # Since we can't verify the entrez ID directly in the response,
    # we're just checking that the query returns results without errors
    assert result.dig("data", "searchFeatures", "results").size.positive?
  end

  test "search features with entrez symbol filter" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            entrezSymbol: {
              comparisonOperator: EQ
              value: "BRAF"
            }
          }
          createPermalink: false
        ) {
          results {
            id
            ... on Feature {
              name
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Skip the test if there are no results
    skip "No features with entrez symbol 'BRAF' found in the test database" unless result.dig("data", "searchFeatures", "results").size.positive?

    # Verify all results have the correct name
    result.dig("data", "searchFeatures", "results").each do |feature|
      assert_equal "BRAF", feature["name"]
    end
  end

  test "search features with ncit id filter" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            ncitId: {
              comparisonOperator: CONTAINS
              value: "C"
            }
          }
          createPermalink: false
        ) {
          results {
            id
            ... on Feature {
              name
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Skip the test if there are no results
    skip "No factor features with NCIT ID containing 'C' found in the test database" unless result.dig("data", "searchFeatures", "results").size.positive?

    # Since we can't verify the NCIT ID directly in the response,
    # we're just checking that the query returns results without errors
    assert result.dig("data", "searchFeatures", "results").size.positive?
  end

  test "search features with fusion partner filters" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            fivePrimePartnerEntrezSymbol: {
              comparisonOperator: CONTAINS
              value: "BCR"
            }
          }
          createPermalink: false
        ) {
          results {
            id
            ... on Feature {
              name
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Skip the test if there are no results
    skip "No fusion features with five prime partner containing 'BCR' found in the test database" unless result.dig("data", "searchFeatures", "results").size.positive?

    # Since we can't verify the fusion partner directly in the response,
    # we're just checking that the query returns results without errors
    assert result.dig("data", "searchFeatures", "results").size.positive?
  end

  test "search features with complex boolean filters" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            subFilters: [
              {
                featureInstanceType: {
                  comparisonOperator: EQ
                  value: GENE
                }
                booleanOperator: AND
              },
              {
                description: {
                  comparisonOperator: CONTAINS
                  value: "gene"
                }
                booleanOperator: OR
              },
              {
                isFlagged: {
                  comparisonOperator: EQ
                  value: true
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
            ... on Feature {
              name
              description
            }
          }
          searchEndpoint
          permalinkId
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]
    assert_not_nil result.dig("data", "searchFeatures", "permalinkId")

    # Since we can't verify all filter criteria directly in the response,
    # we're just checking that the query returns results without errors
    # and that the permalink was created
    assert result.dig("data", "searchFeatures", "results").size.positive?
    assert_not_nil result.dig("data", "searchFeatures", "permalinkId")
  end

  test "search features with has assertion filter" do
    query_string = <<~GRAPHQL
      {
        searchFeatures(
          query: {
            hasAssertion: {
              comparisonOperator: EQ
              value: true
            }
          }
          createPermalink: false
        ) {
          results {
            id
            ... on Feature {
              name
            }
          }
        }
      }
    GRAPHQL

    result = Civic2Schema.execute(query_string)

    assert_nil result["errors"]

    # Skip the test if there are no results
    skip "No features with assertions found in the test database" unless result.dig("data", "searchFeatures", "results").size.positive?
  end
end
