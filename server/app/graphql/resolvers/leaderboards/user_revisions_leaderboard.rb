require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers::Leaderboards
  class UserRevisionsLeaderboard < Resolvers::LeaderboardBase 
    include SearchObject.module(:graphql)

    type Types::Entities::LeaderboardUserType.connection_type, null: false

    scope do
      user_base_query(
        'revision suggested'
      )
    end

    setup_options
  end
end

