require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers::Leaderboards
  class UserSubmissionsLeaderboard < Resolvers::LeaderboardBase 
    include SearchObject.module(:graphql)

    type Types::Entities::LeaderboardUserType.connection_type, null: false

    scope do
      user_base_query(
        'submitted',
        'assertion submitted'
      )
    end

    setup_options
  end
end

