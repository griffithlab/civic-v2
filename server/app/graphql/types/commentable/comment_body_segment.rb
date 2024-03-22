module Types::Commentable
  class CommentBodySegment < Types::BaseUnion
    description 'Segment of a comment that can either be text or an object to be rendered as a tag'
    possible_types Types::Commentable::CommentTagSegment, Types::Commentable::CommentTagSegmentDeprecated, Types::Commentable::CommentTextSegment, Types::Entities::UserType

    def self.resolve_type(object, context)
      if object.is_a?(String)
        Types::Commentable::CommentTextSegment
      elsif object.is_a?(User)
        Types::Entities::UserType
      elsif object[:tag_type] == 'MOLECULAR_PROFILE' || object[:tag_type] == 'VARIANT' || object[:tag_type] == 'FEATURE'
        Types::Commentable::CommentTagSegmentDeprecated
      else
        Types::Commentable::CommentTagSegment
      end
    end
  end
end
