require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers
  class Activities < GraphQL::Schema::Resolver
    include SearchObject.module(:graphql)

    type Types::Interfaces::ActivityInterface.connection_type, null: false

    description 'List and filter activities'

    scope do
      Activity.all.distinct
    end

    option(:user_id, type: Int) do |scope, value|
      scope.where(user_id: value)
    end

  end

end
