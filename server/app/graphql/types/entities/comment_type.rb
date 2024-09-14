module Types::Entities
  class CommentType < Types::BaseObject
    connection_type_class Types::Connections::CommentsConnection

    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :deleted_at, GraphQL::Types::ISO8601DateTime, null: true
    field :title, String, null: true
    field :comment, String, null: false
    field :commenter, Types::Entities::UserType, null: false
    field :creation_event, Types::Entities::EventType, null: true
    field :commentable, Types::Interfaces::Commentable, null: false
    field :parsed_comment, [Types::Commentable::CommentBodySegment], null: false
    field :deleted, Boolean, null: false

    def commenter
      Loaders::AssociationLoader.for(Comment, :user).load(object)
    end

    def creation_event
      Loaders::AssociationLoader.for(Comment, :creation_event).load(object)
    end

    def parsed_comment
      Rails.cache.fetch(hash_key_from_object(object)) do
        Actions::FormatCommentText.get_segments(text: object.comment)
      end
    end

    def deleted
      object.deleted?
    end

    def hash_key_from_object(object)
      "segments_#{object.class}_#{object.id}_#{object.updated_at}"
    end
  end
end
