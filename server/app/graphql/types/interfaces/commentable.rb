module Types::Interfaces
  module Commentable
    include Types::BaseInterface

    description 'A CIViC entity that can have comments on it.'
    field :comments, resolver: Resolvers::Comments
    field :last_comment_event, Types::Entities::EventType, null: true

    def last_comment_event
      Loaders::AssociationLoader.for(object.class, :last_comment_event).load(object)
    end
  end
end
