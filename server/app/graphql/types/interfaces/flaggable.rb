module Types::Interfaces
  module Flaggable
    include Types::BaseInterface

    description 'A CIViC entity that can be flagged for editor attention.'

    field :id, Int, null: false
    field :name, String, null: false
    field :link, String, null: false

    field :flagged, GraphQL::Types::Boolean, null: false
    field :flags, resolver: Resolvers::Flags

    definition_methods do
      def resolve_type(object, context)
        case object
        when Feature
          Types::Entities::FeatureType
        when Variants::GeneVariant
          Types::Variants::GeneVariantType
        when Variants::FactorVariant
          Types::Variants::FactorVariantType
        when Variants::FusionVariant
          Types::Variants::FusionVariantType
        when EvidenceItem
          Types::Entities::EvidenceItemType
        when Assertion
          Types::Entities::AssertionType
        when VariantGroup
          Types::Entities::VariantGroupType
        when MolecularProfile
          Types::Entities::MolecularProfileType
        else
          raise "Unexpected Flaggable type: #{object.class}"
        end
      end
    end

    def flags
      Loaders::AssociationLoader.for(@object.class, :flags).load(object)
    end
  end
end
