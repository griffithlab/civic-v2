require "search_object"
require "search_object/plugin/graphql"

class Resolvers::TopLevelFlags < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::FlagType.connection_type, null: false

  description "List and filter flags."

  scope {
    Flag.order("flags.created_at DESC")
  }

  option(:ids, type: [ Int ], description: "Filter by internal CIViC ids") do |scope, value|
    scope.where(id: value)
  end

  option(:flaggable, type: Types::Flaggable::FlaggableInput) do |scope, value|
    scope.where(flaggable: value)
  end

  option(:flagging_user_id, type: Int, description: "Limit to flags added by a certain user") do |scope, value|
    scope.where(flagging_user_id: value)
  end

  option(:resolving_user_id, type: Int, description: "Limit to flags resolved by a certain user") do |scope, value|
    scope.where(resolving_user_id: value)
  end

  option(:state, type: Types::FlagStateType, description: "Limit to flags in a particular state") do |scope, value|
    scope.where(state: value)
  end

  option(:sort_by, type: Types::DateSortType, description: "Sort order for the flags. Defaults to most recent.") do |scope, value|
    scope.reorder("flags.#{value.column} #{value.direction}")
  end
end
