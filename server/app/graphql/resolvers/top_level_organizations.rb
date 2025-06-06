require "search_object"
require "search_object/plugin/graphql"

class Resolvers::TopLevelOrganizations < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::OrganizationType.connection_type, null: false

  description "List and filter organizations."

  scope { Organization.order(:name) }

  option(:id, type: GraphQL::Types::Int, description: "Exact match filtering on the id of the organization.") do |scope, value |
    scope.where(id: value)
  end

  option(:name, type: GraphQL::Types::String, description: "Substring filtering on the name of the organization.") do |scope, value|
    scope.where("name ILIKE ?", "%#{value}%")
  end
end
