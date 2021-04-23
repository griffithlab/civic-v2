module Types::Interfaces
  module Flaggable
    include Types::BaseInterface

    description 'A CIViC entity that can be flagged for editor attention.'

    field :flagged, GraphQL::Types::Boolean, null: false
    field :flags, Types::Entities::FlagType.connection_type, null: false

    def flags
      Loaders::AssociationLoader.for(@object.class, :flags).load(object)
    end
  end
end
