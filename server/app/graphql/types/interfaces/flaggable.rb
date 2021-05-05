module Types::Interfaces
  module Flaggable
    include Types::BaseInterface

    description 'A CIViC entity that can be flagged for editor attention.'

    field :flagged, GraphQL::Types::Boolean, null: false
    field :flags, resolver: Resolvers::Flags

    def flags
      Loaders::AssociationLoader.for(@object.class, :flags).load(object)
    end
  end
end
