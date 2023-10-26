module Types::Entities
  class FlagType < Types::BaseObject
    connection_type_class Types::Connections::FlagsConnection

    implements Types::Interfaces::Commentable
    implements Types::Interfaces::EventOriginObject
    implements Types::Interfaces::EventSubject

    field :id, Int, null: false
    field :state, Types::FlagStateType, null: false
    field :flagging_user, Types::Entities::UserType, null: false
    field :resolving_user, Types::Entities::UserType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :flaggable, Types::Interfaces::Flaggable, null: false
    field :open_activity, Types::Activities::FlagEntityActivityType, null: false
    field :resolution_activity, Types::Activities::ResolveFlagActivityType, null: true

    def flagging_user
      Loaders::AssociationLoader.for(Flag, :flagging_user).load(object)
    end

    def resolving_user
      Loaders::AssociationLoader.for(Flag, :resolving_user).load(object)
    end

    def open_activity
      Loaders::AssociationLoader.for(Flag, :open_activity).load(object)
    end

    def resolution_activity
      Loaders::AssociationLoader.for(Flag, :resolution_activity).load(object)
    end
  end
end
