module Types::Entities
  class LeaderboardUserType < Types::Entities::UserType
    field :action_count, Int, null: false
    field :rank, Int, null: false
  end
end
