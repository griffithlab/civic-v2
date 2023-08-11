module Types::Queries
  module LeaderboardQueries
    def self.included(klass)
      klass.field :user_comments_leaderboard, resolver: Resolvers::Leaderboards::UserCommentsLeaderboard
      klass.field :organization_comments_leaderboard, resolver: Resolvers::Leaderboards::OrganizationCommentsLeaderboard

      klass.field :user_moderation_leaderboard, resolver: Resolvers::Leaderboards::UserModerationLeaderboard
      klass.field :organization_moderation_leaderboard, resolver: Resolvers::Leaderboards::OrganizationModerationLeaderboard

      klass.field :user_submissions_leaderboard, resolver: Resolvers::Leaderboards::UserSubmissionsLeaderboard
      klass.field :organization_submissions_leaderboard, resolver: Resolvers::Leaderboards::OrganizationSubmissionsLeaderboard

      klass.field :user_revisions_leaderboard, resolver: Resolvers::Leaderboards::UserRevisionsLeaderboard
      klass.field :organization_revisions_leaderboard, resolver: Resolvers::Leaderboards::OrganizationRevisionsLeaderboard
    end
  end
end
