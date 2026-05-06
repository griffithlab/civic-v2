require "search_object"
require "search_object/plugin/graphql"

class Resolvers::BrowseOrganizations < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseOrganizationType.connection_type, null: false

  description "List and filter organizations."

  scope { MaterializedViews::OrganizationBrowseTableRow.order(:name) }

  option(:id, type: GraphQL::Types::Int, description: "Exact match filtering on the id of the organization.") do |scope, value |
    scope.where(id: value)
  end

  option(:ids, type: [ GraphQL::Types::Int ], description: "Filter by internal CIViC ids") do |scope, value|
    scope.where(id: value)
  end

  option(:name, type: GraphQL::Types::String, description: "Substring filtering on the name of the organization.") do |scope, value|
    scope.where("name ILIKE ?", "%#{value}%")
  end

  option :sort_by, type: Types::BrowseTables::OrganizationSortType, description: "Columm and direction to sort evidence on." do |scope, value|
    case value.column
    when "ID"
      scope.reorder("id #{value.direction}")
    when "NAME"
      scope.reorder("name #{value.direction}")
    when "ACTIVITY_COUNT"
      scope.reorder("activity_count #{value.direction}")
    when "MEMBER_COUNT"
      scope.reorder("member_count #{value.direction}")
    when "MOST_RECENT_ACTIVITY_TIMESTAMP"
      scope.reorder("most_recent_activity_timestamp #{value.direction}")
    end
  end
end
