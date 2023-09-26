require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers::Leaderboards
  class OrganizationRevisionsLeaderboard < Resolvers::LeaderboardBase 
    include SearchObject.module(:graphql)

    type Types::Entities::LeaderboardOrganizationType.connection_type, null: false

    scope do
      organization_base_query('revision suggested')
    end

    setup_options
  end
end

