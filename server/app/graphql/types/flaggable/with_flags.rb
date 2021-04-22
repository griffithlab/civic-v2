module Types::Flaggable
  module WithFlags
    def self.included(klass)
      klass.field :flagged, GraphQL::Types::Boolean, null: false
      klass.field :flags, Types::Entities::FlagType.connection_type, null: false

      klass.define_method(:flags) do
        Loaders::AssociationLoader.for(self.object.class, :flags).load(object)
      end
    end
  end
end
