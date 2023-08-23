module Types::Queries
  module LeaderboardQueries
    class UserLeaderboards
    end

    class OrganizationLeaderboards
    end

    def self.included(klass)
      klass.field :user_leaderboards, Types::UserLeaderboardsType, null: false
      klass.field :organization_leaderboards, Types::OrganizationLeaderboardsType, null: false

      def user_leaderboards
        UserLeaderboards.new
      end

      def organization_leaderboards
        OrganizationLeaderboards.new
      end
    end
  end
end
