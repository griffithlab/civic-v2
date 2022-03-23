require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::TopLevelEvents < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  class EventFeedMode < Types::BaseEnum
    description 'The context of an event feed, i.e. what is the root subject of the feed. This option is a no-op when accessing events via a parent.'
    value 'USER', value: :user
    value 'ORGANIZATION', value: :organization
    value 'SUBJECT', value: :subject
  end

  type Types::Entities::EventType.connection_type, null: false

  description 'List and filter events for an object'

  scope do
    Event
      .preload(:subject, :originating_object)
      .order('events.created_at DESC')
  end

  option(:event_type, type: Types::Events::EventActionType) do |scope, value|
    scope.where(action: value)
  end

  option(:originating_user_id, type: Int) do |scope, value|
    scope.where(originating_user_id: value)
  end

  option(:organization_id, type: Int) do |scope, value|
    scope.where(organization_id: value)
  end

  option(:subject, type: Types::Subscribable::SubscribableQueryInput) do |scope, value|
    scope.where(subject: value)
  end

  option(:sort_by, type: Types::DateSortType, description: 'Sort order for the events. Defaults to most recent.') do |scope, value|
    scope.reorder("events.#{value.column} #{value.direction}")
  end

  option(:mode, type: EventFeedMode) do |_, _|
    #accesed in connection, yuck
  end
end
