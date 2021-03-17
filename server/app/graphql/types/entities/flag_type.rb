module Types::Entities
  class FlagType < Types::BaseObject
    field :id, Int, null: false
    field :state, Types::FlagStateType, null: false
  end
end
