module Types
  class UserLeaderboardsType < Types::BaseObject
    field :comments_leaderboard, resolver: Resolvers::Leaderboards::UserCommentsLeaderboard
    field :submissions_leaderboard, resolver: Resolvers::Leaderboards::UserSubmissionsLeaderboard
    field :revisions_leaderboard, resolver: Resolvers::Leaderboards::UserRevisionsLeaderboard
    field :moderation_leaderboard, resolver: Resolvers::Leaderboards::UserModerationLeaderboard
  end
end
