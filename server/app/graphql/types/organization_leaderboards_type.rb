module Types
  class OrganizationLeaderboardsType < Types::BaseObject
    field :moderation_leaderboard, resolver: Resolvers::Leaderboards::OrganizationModerationLeaderboard
    field :comments_leaderboard, resolver: Resolvers::Leaderboards::OrganizationCommentsLeaderboard
    field :submissions_leaderboard, resolver: Resolvers::Leaderboards::OrganizationSubmissionsLeaderboard
    field :revisions_leaderboard, resolver: Resolvers::Leaderboards::OrganizationRevisionsLeaderboard
  end
end
