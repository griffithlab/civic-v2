module Types::Entities
  class RanksType < Types::BaseObject
    field :moderation_rank, Types::Entities::LeaderboardRank, null: false
    field :comments_rank, Types::Entities::LeaderboardRank, null: false
    field :submissions_rank, Types::Entities::LeaderboardRank, null: false
    field :revisions_rank, Types::Entities::LeaderboardRank, null: false
  end
end
