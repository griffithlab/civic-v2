module Types::Commentable
  class CommentTagSegment < Types::BaseObject
    field :entity_id, GraphQL::Types::Int, null: false
    field :display_name, GraphQL::Types::String, null: false
    field :tag_type, Types::Commentable::TaggableEntity, null: false
  end
end
