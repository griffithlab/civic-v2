module Types::Interfaces
  module EventSubject
    include Types::BaseInterface

    description "The subject of an event log event."

    field :id, Int, null: false
    field :name, String, null: false
    field :link, String, null: false

    field :events, resolver: Resolvers::Events

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
        when VariantCoordinate
          Types::Entities::VariantCoordinateType
        when ExonCoordinate
          Types::Entities::ExonCoordinateType
        when EvidenceItem
          Types::Entities::EvidenceItemType
        when Assertion
          Types::Entities::AssertionType
        when Revision
          Types::Revisions::RevisionType
        when Source
          Types::Entities::SourceType
        when SourceSuggestion
          Types::Entities::SourceSuggestionType
        when VariantGroup
          Types::Entities::VariantGroupType
        when MolecularProfile
          Types::Entities::MolecularProfileType
        when Flag
          Types::Entities::FlagType
        when RevisionSet
          Types::Entities::RevisionSetType
        when Comment
          Types::Entities::CommentType
        else
          raise "Unexpected EventSubject type: #{object.class}"
        end
      end
    end
  end
end
