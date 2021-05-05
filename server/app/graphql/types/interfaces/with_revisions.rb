module Types::Interfaces
  module WithRevisions
    include Types::BaseInterface

    description 'A CIViC entity that can have revisions proposed to it.'
    field :revisions, resolver: Resolvers::Revisions
  end
end
