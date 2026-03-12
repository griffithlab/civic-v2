require "test_helper"

class UpdateNotificationStatusTest < ActiveSupport::TestCase
  def setup
    @curator = users(:curator)
    @editor = users(:editor)
    @notification = notifications(:curator_notification)
    @update_status_mutation = <<-GRAPHQL
      mutation($ids: [Int!]!, $newStatus: ReadStatus!) {
        updateNotificationStatus(input: { ids: $ids, newStatus: $newStatus }) {
          notifications {
            id
            seen
          }
        }
      }
    GRAPHQL
  end

  test "requires authentication" do
    response = execute_mutation(
      @update_status_mutation,
      variables: { ids: [ @notification.id ], newStatus: "READ" },
    )
    assert_graphql_error(response, /must log in/i)
  end

  test "marks notification as read" do
    refute @notification.seen
    response = execute_mutation(
      @update_status_mutation,
      user: @curator,
      variables: { ids: [ @notification.id ], newStatus: "READ" },
    )
    result = response.dig("data", "updateNotificationStatus", "notifications")
    assert_not_nil result
    assert_equal 1, result.length
    assert result[0]["seen"]

    @notification.reload
    assert @notification.seen
  end

  test "marks notification as unread" do
    @notification.update!(seen: true)
    response = execute_mutation(
      @update_status_mutation,
      user: @curator,
      variables: { ids: [ @notification.id ], newStatus: "UNREAD" },
    )
    result = response.dig("data", "updateNotificationStatus", "notifications")
    assert_not_nil result
    refute result[0]["seen"]
  end

  test "rejects non-existent notification id" do
    response = execute_mutation(
      @update_status_mutation,
      user: @curator,
      variables: { ids: [ 999999 ], newStatus: "READ" },
    )
    assert_graphql_error(response, /notification with id .* does(n't| not) exist/i)
  end

  test "rejects marking another user's notification" do
    response = execute_mutation(
      @update_status_mutation,
      user: @editor,
      variables: { ids: [ @notification.id ], newStatus: "READ" },
    )
    assert_graphql_error(response, /only allowed to mark your own notifications as read/i)
  end
end
