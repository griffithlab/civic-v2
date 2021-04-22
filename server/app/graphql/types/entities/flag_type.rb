module Types::Entities
  class FlagType < Types::BaseObject
    field :id, Int, null: false
    field :state, Types::FlagStateType, null: false
    field :flagging_user, Types::Entities::UserType, null: false
    field :resolving_user, Types::Entities::UserType, null: true
    field :comments, Types::Entities::CommentType.connection_type, null: false

    def comments
      Loaders::AssociationLoader.for(Flag, :comments).load(object)
    end
  end
end
