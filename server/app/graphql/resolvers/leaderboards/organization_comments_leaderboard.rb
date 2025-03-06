require "search_object"
require "search_object/plugin/graphql"

module Resolvers::Leaderboards
  class OrganizationCommentsLeaderboard < Resolvers::LeaderboardBase
    include SearchObject.module(:graphql)

    type Types::Entities::LeaderboardOrganizationType.connection_type, null: false

    scope do
      Leaderboard.organization_base_query(Leaderboard.comment_actions)
    end

    setup_options
  end
end
