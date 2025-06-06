require "search_object"
require "search_object/plugin/graphql"

module Resolvers
  class Activities < GraphQL::Schema::Resolver
    include SearchObject.module(:graphql)

    type Types::Interfaces::ActivityInterface.connection_type, null: false

    description "List and filter activities"

    scope do
      Activity.order(created_at: :desc).distinct
    end

    option(:user_id, type: [ Int ]) do |scope, value|
      scope.where(user_id: value)
    end

    option(:organization, type: Types::OrganizationFilterType, description: "Filter EIDs on the organization the evidence item was submitted under.") do  |scope, value|
      if value.include_subgroups && !value.ids.nil?
        org_ids = Organization.where(id: value.ids).flat_map { |o| o.org_and_suborg_ids }
        scope.where({ organization_id: org_ids })
      elsif !value.ids.nil?
        scope.where({ organization_id: value.ids })
      elsif !value.name.blank?
        scope.joins(:organization).where("name ILIKE ?", "#{value.name}%")
      else
        scope
      end
    end

    option(:activity_type, type: [ Types::Activities::ActivityTypeInputType ]) do |scope, value|
      scope.where(type: value)
    end

    option(:subject_type, type: [ Types::Activities::ActivitySubjectInputType ]) do |scope, value|
      scope.where(subject_type: value)
    end

    option(:sort_by, type: Types::DateSortType, description: "Sort order for the activities. Defaults to most recent.") do |scope, value|
      scope.reorder("activities.#{value.column} #{value.direction}")
    end

    option(:subject, type: [ Types::Subscribable::SubscribableQueryInput ]) do |scope, value|
      scope.where(subject: value)
    end

    option(:linked_endorsement_id, type: Int, description: "Filter activities on being linked to the endorsement with the given CIViC ID.") do |scope, value|
      scope.joins(:activity_linked_entities).where("activity_linked_entities.entity_type = 'Endorsement' AND activity_linked_entities.entity_id = ?", value)
    end

    option(:occurred_before, type:  GraphQL::Types::ISO8601DateTime) do |scope, value|
      scope.where("activities.created_at <= ?", value)
    end

    option(:occurred_after, type:  GraphQL::Types::ISO8601DateTime) do |scope, value|
      scope.where("activities.created_at >= ?", value)
    end

    option(:mode, type: Types::Events::EventFeedMode) do |_, _|
      # accessed in connection, yuck
    end

    option(:include_automated_events, type: Boolean, default_value: false) do |scope, value|
      if !include_automated_events
        scope.where.not(user_id: Constants::CIVICBOT_USER_ID)
      else
        scope
      end
    end
  end
end
