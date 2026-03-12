require "test_helper"

class SubscribeUnsubscribeTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @feature = features(:braf)
    @subscribe_mutation = <<-GRAPHQL
      mutation($subscribables: [SubscribableInput!]!, $subscribeToChildren: Boolean) {
        subscribe(input: { subscribables: $subscribables, subscribeToChildren: $subscribeToChildren }) {
          subscriptions {
            id
          }
        }
      }
    GRAPHQL

    @unsubscribe_mutation = <<-GRAPHQL
      mutation($subscribables: [SubscribableInput!]!, $unsubscribeFromChildren: Boolean) {
        unsubscribe(input: { subscribables: $subscribables, unsubscribeFromChildren: $unsubscribeFromChildren }) {
          unsubscribedEntities {
            __typename
          }
        }
      }
    GRAPHQL
  end

  test "subscribe requires authentication" do
    response = execute_mutation(
      @subscribe_mutation,
      variables: {
        subscribables: [ { id: @feature.id, entityType: "FEATURE" } ],
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "unsubscribe requires authentication" do
    response = execute_mutation(
      @unsubscribe_mutation,
      variables: {
        subscribables: [ { id: @feature.id, entityType: "FEATURE" } ],
      },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "subscribes to a feature" do
    response = execute_mutation(
      @subscribe_mutation,
      user: @user ,
      variables: {
        subscribables: [ { id: @feature.id, entityType: "FEATURE" } ],
      },
    )
    result = response.dig("data", "subscribe", "subscriptions")
    assert_not_nil result
    assert result.length >= 1
  end

  test "unsubscribes from a feature" do
    # First subscribe
    execute_mutation(
      @subscribe_mutation,
      user: @user ,
      variables: {
        subscribables: [ { id: @feature.id, entityType: "FEATURE" } ],
      },
    )

    # Then unsubscribe
    response = execute_mutation(
      @unsubscribe_mutation,
      user: @user ,
      variables: {
        subscribables: [ { id: @feature.id, entityType: "FEATURE" } ],
      },
    )
    result = response.dig("data", "unsubscribe", "unsubscribedEntities")
    assert_not_nil result
  end

  test "subscribes to multiple entities" do
    ei_id = ActiveRecord::FixtureSet.identify(:submitted_ei)
    response = execute_mutation(
      @subscribe_mutation,
      user: @user ,
      variables: {
        subscribables: [
          { id: @feature.id, entityType: "FEATURE" },
          { id: ei_id, entityType: "EVIDENCE_ITEM" },
        ],
      },
    )
    result = response.dig("data", "subscribe", "subscriptions")
    assert_not_nil result
    assert result.length >= 2
  end
end
