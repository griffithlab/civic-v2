require "search_object"
require "search_object/plugin/graphql"

module Resolvers::Leaderboards
  class UserCommentsLeaderboard < Resolvers::LeaderboardBase
    include SearchObject.module(:graphql)

    include UserLeaderboardQueries

    type Types::Entities::LeaderboardUserType.connection_type, null: false

    scope do
      Leaderboard.user_base_query(Leaderboard.comment_actions)
    end

    setup_options
  end
end
