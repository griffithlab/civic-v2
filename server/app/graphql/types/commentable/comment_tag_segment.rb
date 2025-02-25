require_relative "../linkable_tag.rb"

module Types::Commentable
  class CommentTagSegment < Types::BaseObject
    field :entity_id, GraphQL::Types::Int, null: false
    field :display_name, GraphQL::Types::String, null: false
    field :tag_type, Types::Commentable::TaggableEntity, null: false
    field :link, GraphQL::Types::String, null: false
    field :revision_set_id, GraphQL::Types::Int, null: true
    field :feature, Types::LinkableFeature, null: true
  end

  class CommentTagSegmentFlagged < CommentTagSegment
    field :flagged, GraphQL::Types::Boolean, null: false
  end

  class CommentTagSegmentFlaggedAndWithStatus < CommentTagSegmentFlagged
    field :status, Types::EvidenceStatusType, null: false
  end

  class CommentTagSegmentFlaggedAndDeprecated < CommentTagSegmentFlagged
    field :deprecated, GraphQL::Types::Boolean, null: false
  end
end
