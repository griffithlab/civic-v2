module Types::Commentable
  class CommentBodySegment < Types::BaseUnion
    description 'Segment of a comment that can either be text or an object to be rendered as a tag'
    possible_types Types::Commentable::CommentTagSegment, Types::Commentable::CommentTextSegment

    def self.resolve_type(object, context) 
      if object.is_a?(String)
        Types::Commentable::CommentTextSegment
      else
        Types::Commentable::CommentTagSegment
      end
    end
  end
end
