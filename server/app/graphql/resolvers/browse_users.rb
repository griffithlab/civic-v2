require "search_object"
require "search_object/plugin/graphql"

class Resolvers::BrowseUsers < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseUserType.connection_type, null: false

  description "List and filter users."

  scope { MaterializedViews::UserBrowseTableRow.all.order(:id) }

  option(:ids, type: [ Int ], description: "Filter by internal CIViC ids") do |scope, value|
    scope.where(id: value)
  end

  option(:organization, type: Types::OrganizationFilterType, description: "Limit to users that belong to a certain organizations") do |scope, value|
    if value.include_subgroups && !value.ids.nil?
      org_ids = Organization.where(id: value.ids).flat_map { |o| o.org_and_suborg_ids }
      user_ids = User.joins(:organizations).where({ organizations: { id: org_ids } }).select("users.id").distinct
      scope.where(id: user_ids)
    elsif !value.ids.nil?
      user_ids = User.joins(:organizations).where({ organizations: { id: value.ids } }).select("users.id").distinct
      scope.where(id: user_ids)
    elsif !value.name.blank?
      scope.joins(:organizations).where("organizations.name ILIKE ?", "#{value.name}%")
    else
      scope
    end
  end

  option(:name, type: String, description: "Filtering on name") do | scope, value |
    scope.where("name ILIKE ?", "%#{value}%")
  end

  option(:username, type: String, description: "Filtering on username") do | scope, value |
    scope.where("username ILIKE ?", "%#{value}%")
  end

  option(:role, type: Types::Entities::UserRoleType, description: "Filtering on role.") do | scope, value |
    scope.where(role: value)
  end

  option(:sort_by, type: Types::BrowseTables::UsersSortType, description: "Sort user columns in ascending or decending order") do |scope, value|
    case value.column
    when "ID"
      scope.reorder("id #{value.direction}")
    when "NAME"
      scope.where.not("name = ? AND name = ?", nil, "").reorder("name #{value.direction}")
    when "ROLE"
      scope.reorder("role #{value.direction}")
    when "LAST_ACTION"
      scope.reorder("most_recent_activity_timestamp #{value.direction} NULLS LAST")
    when "REVISION_COUNT"
      scope.reorder("revision_count #{value.direction}")
    when "EVIDENCE_COUNT"
      scope.reorder("evidence_count #{value.direction}")
    end
  end
end
