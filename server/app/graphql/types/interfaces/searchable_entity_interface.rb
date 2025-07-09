module Types::Interfaces
  module SearchableEntityInterface
    include Types::BaseInterface

    field :id, Int, null: false

    definition_methods do
      def resolve_type(object, context)
        case object
        when Feature
          Types::Entities::FeatureType
        when Assertion
          Types::Entities::AssertionType
          # Add more entity types as they become searchable
        else
          raise "Unexpected Searchable Entity type: #{object.class}"
        end
      end
    end
  end
end