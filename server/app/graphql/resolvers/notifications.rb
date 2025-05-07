require "search_object"
require "search_object/plugin/graphql"

class Resolvers::Notifications < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::NotificationType.connection_type, null: false

  description "List and filter notifications for the logged in user."

  scope do
    Notification.joins(:event).where(notified_user: context[:current_user]).order("events.created_at DESC")
    # Notification.where(notified_user: context[:current_user])
  end

  option(:notification_reason, type: Types::NotificationReasonType) do |scope, value|
    scope.where(type: value)
  end

  option(:subscription_id, type: Int) do |scope, value|
    scope.where(subscription_id: value)
  end

  option(:originating_object, type: Types::Subscribable::SubscribableInput) do |scope, value|
    scope.joins(:event).where(events: { originating_object: value })
      .or(scope.where(events: { subject: value }))
  end

  option(:event_type, type: Types::Events::EventActionType) do |scope, value|
    scope.joins(:event).where(events: { action: value })
  end

  option(:originating_user_id, type: Int) do |scope, value|
    scope.where(originating_user_id: value)
  end

  option(:organization_id, type: Int) do |scope, value|
    scope.joins(:event).where(events: { organization_id: value })
  end

  option(:include_read, type: Boolean, default: false) do |scope, value|
    if !value
      scope.where(seen: false)
    else
      scope
    end
  end
end
