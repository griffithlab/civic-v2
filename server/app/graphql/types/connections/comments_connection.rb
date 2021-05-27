module Types::Connections
  class CommentsConnection < Types::BaseConnection
    description 'Connection type for objects with comments including additional metadata.'

    field :unique_commenters, [Types::Entities::UserType], null: false,
      description: 'List of all users that have commented on this entity.'

    def unique_commenters
      User.where(id: parent.comments.select(:user_id)).distinct
    end

  end
end
