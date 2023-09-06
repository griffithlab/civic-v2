module Types::Entities
  class LeaderboardOrganizationType < Types::Entities::OrganizationType
    field :action_count, Int, null: false
    field :rank, Int, null: false
  end
end
