require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::TopLevelUsers < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::UserType.connection_type, null: false

  description 'List and filter users.'

  scope { User.all.order(:id) }

  option(:organization, type: Types::OrganizationFilterType, description: 'Limit to users that belong to a certain organizations') do |scope, value|
    if value.include_subgroups && !value.id.nil?
      scope.joins(:organizations).where({organizations: {id: Organization.find(value.id).org_and_suborg_ids}})
    elsif !value.id.nil?
      scope.joins(:organizations).where("organizations.id = ?", value.id)
    else
      scope.joins(:organizations).where("organizations.name ILIKE ?", "#{value.name}%")
    end
  end

  option(:name, type: String, description: 'Filtering on name') do | scope, value |
    scope.where("name ILIKE ?", "%#{value}%")
  end

  option(:username, type: String, description: 'Filtering on username') do | scope, value |
    scope.where("username ILIKE ?", "%#{value}%")
  end

  option(:role, type: Types::Entities::UserRoleType, description: 'Filtering on role.') do | scope, value |
    scope.where(role: value)
  end

  option(:sort_by, type: Types::BrowseTables::UsersSortType, description: 'Sort user columns in ascending or decending order') do |scope, value|
    case value.column
    when 'ID'
      scope.reorder("users.id #{value.direction}")
    when 'NAME'
      scope.where.not("users.name = ? AND users.name = ?", nil, "").reorder("users.name #{value.direction}")
    when 'ROLE'
      scope.reorder("users.role #{value.direction}")
    when 'LAST_ACTION'
      scope.reorder("users.most_recent_activity_timestamp #{value.direction} NULLS LAST")
    end
  end
end
