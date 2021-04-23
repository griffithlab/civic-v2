module Types::Interfaces
  module Commentable
    include Types::BaseInterface

    description 'A CIViC entity that can have comments on it.'
    field :comments, Types::Entities::CommentType.connection_type, null: false

    def comments
      Loaders::AssociationLoader.for(@object.class, :comments).load(object)
    end
  end
end