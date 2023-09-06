require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers::Leaderboards
  class UserModerationLeaderboard < Resolvers::LeaderboardBase 
    include SearchObject.module(:graphql)
    include UserLeaderboardQueries

    type Types::Entities::LeaderboardUserType.connection_type, null: false

    scope do
      user_base_query(
        'revision accepted',
        'revision rejected',
        'accepted',
        'rejected',
        'assertion accepted',
        'assertion rejected'
      )
    end

    setup_options
  end
end

