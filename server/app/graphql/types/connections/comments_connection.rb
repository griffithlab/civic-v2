module Types::Connections
  class CommentsConnection < Types::BaseConnection
    description 'Connection type for objects with comments including additional metadata.'

    field :unique_commenters, [Types::Entities::UserType], null: false,
      description: 'List of all users that have commented on this entity.'

    def unique_commenters
      if comment_subject
        User.where(id:
          Comment.where(commentable: comment_subject).select(:user_id)
        ).distinct
      else
        User.where(id: parent.comments.select(:user_id)).distinct
      end
    end

    private
    def comment_subject
      @comment_subject ||= object.arguments[:subject]
    end

  end
end
