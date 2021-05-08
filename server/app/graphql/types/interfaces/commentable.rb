module Types::Interfaces
  module Commentable
    include Types::BaseInterface

    description 'A CIViC entity that can have comments on it.'
    field :comments, resolver: Resolvers::Comments

    field :unique_commenters, [Types::Entities::UserType], null: false,
      description: 'List of all users that have commented on this entity.'

    def unique_commenters
      User.where(id: object.comments.select(:user_id)).distinct
    end

  end
end