module Types::Interfaces
  module Commentable
    include Types::BaseInterface

    description 'A CIViC entity that can have comments on it.'
    field :comments, resolver: Resolvers::Comments

  end
end