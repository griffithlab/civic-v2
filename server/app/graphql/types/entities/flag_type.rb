module Types::Entities
  class FlagType < Types::BaseObject
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :state, Types::FlagStateType, null: false
    field :flagging_user, Types::Entities::UserType, null: false
    field :resolving_user, Types::Entities::UserType, null: true

    def flagging_user
      Loaders::AssociationLoader.for(Flag, :flagging_user).load(flagging_user)
    end

    def resolving_user
      Loaders::AssociationLoader.for(Flag, :resolving_user).load(resolving_user)
    end
  end
end
