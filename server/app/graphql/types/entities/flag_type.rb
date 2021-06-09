module Types::Entities
  class FlagType < Types::BaseObject
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :state, Types::FlagStateType, null: false
    field :flagging_user, Types::Entities::UserType, null: false
    field :resolving_user, Types::Entities::UserType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :flaggable, Types::Interfaces::Flaggable, null: false

    def flagging_user
      Loaders::AssociationLoader.for(Flag, :flagging_user).load(object)
    end

    def resolving_user
      Loaders::AssociationLoader.for(Flag, :resolving_user).load(object)
    end
  end
end
