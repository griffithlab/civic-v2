module Types::Entities
  class EvidenceItemType < Types::BaseObject

    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable

    field :id, Int, null: false
    field :clinical_significance, Types::EvidenceClinicalSignificanceType, null: false
    field :description, String, null: false
    field :disease, Types::Entities::DiseaseType, null: true
    field :drugs, [Types::Entities::DrugType], null: true
    field :drug_interaction_type, Types::DrugInteractionType, null: true
    field :evidence_direction, Types::EvidenceDirectionType, null: false
    field :evidence_level, Types::EvidenceLevelType, null: false
    field :evidence_rating, Int, null: true,
      validates: { inclusion: { in: [1, 2, 3, 4, 5], allow_blank: true } }
    field :evidence_type, Types::EvidenceTypeType, null: false
    field :phenotypes, [Types::Entities::PhenotypeType], null: true
    field :source, Types::Entities::SourceType, null: false
    field :status, Types::EvidenceStatusType, null: false
    field :variant, Types::Entities::VariantType, null: false
    field :variant_hgvs, String, null: false
    field :variant_origin, Types::VariantOriginType, null: false
    field :revisions, [Types::Revisions::RevisionType], null: false
    field :events, Types::Entities::EventType.connection_type, null: false

    def disease
      Loaders::RecordLoader.for(Disease).load(object.disease_id)
    end

    def drugs
      Loaders::AssociationLoader.for(EvidenceItem, :drugs).load(object)
    end

    def evidence_rating
      object.rating
    end

    def phenotypes
      Loaders::AssociationLoader.for(EvidenceItem, :phenotypes).load(object)
    end

    def source
      Loaders::RecordLoader.for(Source).load(object.source_id)
    end

    def variant
      Loaders::RecordLoader.for(Variant).load(object.variant_id)
    end

    def revisions
      Loaders::AssociationLoader.for(EvidenceItem, :revisions).load(object)
    end

    def events
      Loaders::AssociationLoader.for(EvidenceItem, :events).load(object)
    end
  end
end
