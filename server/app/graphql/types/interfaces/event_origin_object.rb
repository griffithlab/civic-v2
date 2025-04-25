module Types::Interfaces
  module EventOriginObject
    include Types::BaseInterface

    description <<~DOC
      The originating object for an event.
      This is useful when the subject of an event is not the actual origin of the event.
      For instance when you suggest a revision, the subject of the Event will be the entity being revised,
      while the originating object will be the Revision itself.
    DOC

    field :id, Int, null: false
    field :name, String, null: false
    field :link, String, null: false

    def name
      if object.respond_to?(:name)
        object.name
      else
        "#{object.class.to_s.first}ID#{object.id}"
      end
    end

    definition_methods do
      def resolve_type(object, context)
        case object
        when Comment
          Types::Entities::CommentType
        when Revision
          Types::Revisions::RevisionType
        when Flag
          Types::Entities::FlagType
        when Assertion
          Types::Entities::AssertionType
        when EvidenceItem
          Types::Entities::EvidenceItemType
        when SourceSuggestion
          Types::Entities::SourceSuggestionType
        when Variants::GeneVariant
          Types::Variants::GeneVariantType
        when Variants::FactorVariant
          Types::Variants::FactorVariantType
        when Variants::FusionVariant
          Types::Variants::FusionVariantType
        when MolecularProfile
          Types::Entities::MolecularProfileType
        when Feature
          Types::Entities::FeatureType
        when SourceLink
          Types::SourceLinkType
        else
          raise "Unexpected EventOriginObject type: #{object.class}"
        end
      end
    end
  end
end
