module Types::Commentable
  class CommentTextSegment < Types::BaseObject
    field :text, String, null: false

    def text
      object
    end
  end
end
