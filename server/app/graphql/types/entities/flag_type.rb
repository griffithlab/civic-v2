module Types::Entities
  class FlagType < Types::BaseObject
    implements Types::Interfaces::Commentable

    field :id, Int, null: false
    field :state, Types::FlagStateType, null: false
    field :flagging_user, Types::Entities::UserType, null: false
    field :resolving_user, Types::Entities::UserType, null: true
  end
end
