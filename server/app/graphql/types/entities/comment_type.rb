module Types::Entities
  class CommentType < Types::BaseObject
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :title, String, null: true
    field :comment, String, null: false
    field :commentor, Types::Entities::UserType, null: false
    field :creation_event, Types::Entities::EventType, null: true

    def commentor
      Loaders::AssociationLoader.for(Comment, :user).load(object)
    end

    def creation_event
      Loaders::AssociationLoader.for(Comment, :creation_event).load(object)
    end
  end
end
