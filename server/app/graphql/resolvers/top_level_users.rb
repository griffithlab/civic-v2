require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::TopLevelUsers < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::UserType.connection_type, null: false

  description 'List and filter users.'

  scope {
    User.all
  }

  option(:organization, type: Types::OrganizationFilterType, description: 'Limit to users that belong to a certain organizations') do |scope, value|
    if value.include_subgroups
      scope.joins(:organizations).where({organizations: {id: Organization.find(value.id).org_and_suborg_ids}})
    else
      scope.joins(:organizations).where("organizations.id = ?", value.id)
    end
  end
end
