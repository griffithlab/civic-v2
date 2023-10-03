module Types::Entities
  class RanksType < Types::BaseObject
    field :moderation_rank, Types::Entities::LeaderboardRank, null: true
    field :comments_rank, Types::Entities::LeaderboardRank, null: true
    field :submissions_rank, Types::Entities::LeaderboardRank, null: true
    field :revisions_rank, Types::Entities::LeaderboardRank, null: true
  end
end
