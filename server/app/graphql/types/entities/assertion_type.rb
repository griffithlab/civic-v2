module Types::Entities
  class AssertionType < Types::BaseObject

    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :name, String, null: false
    field :variant, Types::Entities::VariantType, null: false
    field :gene, Types::Entities::GeneType, null: false
    field :clinical_significance, Types::AssertionClinicalSignificanceType, null: false
    field :summary, String, null: false
    field :description, String, null: false
    field :disease, Types::Entities::DiseaseType, null: true
    field :drugs, [Types::Entities::DrugType], null: false
    field :drug_interaction_type, Types::DrugInteractionType, null: true
    field :assertion_direction, Types::AssertionDirectionType, null: false
    field :assertion_type, Types::AssertionTypeType, null: false
    field :phenotypes, [Types::Entities::PhenotypeType], null: false
    field :status, Types::EvidenceStatusType, null: false
    field :variant_origin, Types::VariantOriginType, null: false
    field :regulatory_approval, GraphQL::Types::Boolean, null: true
    field :fda_companion_test, GraphQL::Types::Boolean, null: true
    field :nccn_guideline, String, null: true
    field :acmg_codes, [Types::Entities::AcmgCodeType], null: false
    field :amp_level, Types::AmpLevelType, null: true
    field :submission_event, Types::Entities::EventType, null: false
    field :acceptance_event, Types::Entities::EventType, null: true
    field :rejection_event, Types::Entities::EventType, null: true
    field :evidence_items, [Types::Entities::EvidenceItemType], null: false

    def disease
      Loaders::RecordLoader.for(Disease).load(object.disease_id)
    end

    def drugs
      Loaders::AssociationLoader.for(Assertion, :drugs).load(object)
    end

    def phenotypes
      Loaders::AssociationLoader.for(Assertion, :phenotypes).load(object)
    end

    def acmg_codes
      Loaders::AssociationLoader.for(Assertion, :acmg_codes).load(object)
    end

    def variant
      Loaders::RecordLoader.for(Variant).load(object.variant_id)
    end

    def gene
      Loaders::RecordLoader.for(Gene).load(object.gene_id)
    end

    def assertion_direction
      object.evidence_direction
    end

    def assertion_type
      object.evidence_type
    end

    def regulatory_approval
      object.fda_regulatory_approval
    end

    def nccn_guideline
      Loaders::AssociationLoader.for(Assertion, :nccn_guideline).load(object).then do | nccn_guideline |
        nccn_guideline&.name
      end
    end

    def submission_event
      Loaders::AssociationLoader.for(Assertion, :submission_event).load(object)
    end

    def acceptance_event
      Loaders::AssociationLoader.for(Assertion, :acceptance_event).load(object)
    end

    def rejection_event
      Loaders::AssociationLoader.for(Assertion, :rejection_event).load(object)
    end
  end
end
