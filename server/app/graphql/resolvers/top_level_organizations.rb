require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::TopLevelOrganizations < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::OrganizationType.connection_type, null: false

  description 'List and filter organizations.'

  scope { Organization.all.order(:name) }

  option(:id, type: GraphQL::Types::Int, description: 'Exact match filtering on the id of the organization.') do |scope, value |
    scope.where("organizations.id = ?", value)
  end

  option(:name, type: GraphQL::Types::String, description: 'Substring filtering on the name of the organization.') do |scope, value|
    scope.where("organizations.name ILIKE ?", "%#{value}%")
  end

  option :sort_by, type: Types::BrowseTables::OrganizationSortType, description: 'Columm and direction to sort evidence on.' do |scope, value|
    case value.column
    when 'ID'
      scope.order("organizations.id #{value.direction}")
    when 'NAME'
      scope.order("organizations.name #{value.direction}")
    end
  end
end
