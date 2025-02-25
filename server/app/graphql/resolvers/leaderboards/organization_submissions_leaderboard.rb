require "search_object"
require "search_object/plugin/graphql"

module Resolvers::Leaderboards
  class OrganizationSubmissionsLeaderboard < Resolvers::LeaderboardBase
    include SearchObject.module(:graphql)

    type Types::Entities::LeaderboardOrganizationType.connection_type, null: false

    scope do
      Leaderboard.organization_base_query(Leaderboard.submission_actions)
    end

    setup_options
  end
end
