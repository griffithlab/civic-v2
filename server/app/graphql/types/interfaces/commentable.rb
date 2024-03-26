module Types::Interfaces
  module Commentable
    include Types::BaseInterface

    description 'A CIViC entity that can have comments on it.'
    field :id, Int, null: false
    field :name, String, null: false
    field :link, String, null: false

    field :comments, resolver: Resolvers::Comments
    field :last_comment_event, Types::Entities::EventType, null: true

    definition_methods do
      def resolve_type(object, context)
        case object
        when Assertion
          Types::Entities::AssertionType
        when EvidenceItem
          Types::Entities::EvidenceItemType
        when Flag
          Types::Entities::FlagType
        when Revision
          Types::Revisions::RevisionType
        when Source
          Types::Entities::SourceType
        when Variants::GeneVariant
          Types::Variants::GeneVariantType
        when Variants::FactorVariant
          Types::Variants::FactorVariantType
        when VariantGroup
          Types::Entities::VariantGroupType
        when Source
          Types::Entities::SourceType
        when MolecularProfile
          Types::Entities::MolecularProfileType
        when Feature
          Types::Entities::FeatureType
        else
          raise "Unexpected Commentable type: #{object.class}"
        end
      end
    end

    def last_comment_event
      Loaders::AssociationLoader.for(object.class, :last_comment_event).load(object)
    end
  end
end
