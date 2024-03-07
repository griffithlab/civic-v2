require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers
  class Activities < GraphQL::Schema::Resolver
    include SearchObject.module(:graphql)

    type Types::Interfaces::ActivityInterface.connection_type, null: false

    description 'List and filter activities'

    scope do
      Activity.order(created_at: :desc).distinct
    end

    option(:user_id, type: [Int]) do |scope, value|
      scope.where(user_id: value)
    end

    option(:organization_id, type: [Int]) do |scope, value|
      scope.where(organization_id: value)
    end

    option(:activity_type, type: [Types::Activities::ActivityTypeInputType]) do |scope, value|
      scope.where(type: value)
    end

    option(:subject_type, type: [Types::Activities::ActivitySubjectInputType]) do |scope, value|
      scope.where(subject_type: value)
    end

    option(:sort_by, type: Types::DateSortType, description: 'Sort order for the activities. Defaults to most recent.') do |scope, value|
      scope.reorder("activities.#{value.column} #{value.direction}")
    end

    option(:subject, type: [Types::Subscribable::SubscribableQueryInput]) do |scope, value|
      scope.where(subject: value)
    end

    option(:include_automated_events, type: Boolean, default_value: true) do |scope, value|
      if !include_automated_events
        scope.where.not(user_id: Constants::CIVICBOT_USER_ID)
      else
        scope
      end
    end

    option(:mode, type: Types::Events::EventFeedMode) do |_, _|
      #accesed in connection, yuck
    end
  end
end
