require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers::Leaderboards
  class UserCommentsLeaderboard < Resolvers::LeaderboardBase 
    include SearchObject.module(:graphql)

    type Types::Entities::LeaderboardUserType.connection_type, null: false

    scope do
      user_base_query('commented')
    end

    setup_options
  end
end

