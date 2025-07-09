module Types::Entities
  class AssertionType < Types::BaseObject
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject
    implements Types::Interfaces::SearchableEntityInterface

    field :id, Int, null: false
    field :name, String, null: false
    field :molecular_profile, Types::Entities::MolecularProfileType, null: false
    field :significance, Types::AssertionSignificanceType, null: false
    field :summary, String, null: false
    field :description, String, null: false
    field :disease, Types::Entities::DiseaseType, null: true
    field :therapies, [ Types::Entities::TherapyType ], null: false
    field :therapy_interaction_type, Types::TherapyInteractionType, null: true
    field :assertion_direction, Types::AssertionDirectionType, null: false
    field :assertion_type, Types::AssertionTypeType, null: false
    field :phenotypes, [ Types::Entities::PhenotypeType ], null: false
    field :status, Types::EvidenceStatusType, null: false
    field :variant_origin, Types::VariantOriginType, null: false
    field :regulatory_approval, GraphQL::Types::Boolean, null: true
    field :regulatory_approval_last_updated, GraphQL::Types::ISO8601DateTime, null: true
    field :fda_companion_test, GraphQL::Types::Boolean, null: true
    field :fda_companion_test_last_updated, GraphQL::Types::ISO8601DateTime, null: true
    field :nccn_guideline, Types::Entities::NccnGuidelineType, null: true
    field :nccn_guideline_version, String, null: true
    field :acmg_codes, [ Types::Entities::AcmgCodeType ], null: false
    field :clingen_codes, [ Types::Entities::ClingenCodeType ], null: false
    field :amp_level, Types::AmpLevelType, null: true
    field :submission_event, Types::Entities::EventType, null: false
    field :submission_activity, Types::Activities::SubmitAssertionActivityType, null: false
    field :acceptance_event, Types::Entities::EventType, null: true
    field :rejection_event, Types::Entities::EventType, null: true
    field :evidence_items, [ Types::Entities::EvidenceItemType ], null: false
    field :evidence_items_count, Integer, null: false
    field :endorsements, resolver: Resolvers::Endorsements

    def disease
      Loaders::RecordLoader.for(Disease).load(object.disease_id)
    end

    def therapies
      Loaders::AssociationLoader.for(Assertion, :therapies).load(object)
    end

    def phenotypes
      Loaders::AssociationLoader.for(Assertion, :phenotypes).load(object)
    end

    def acmg_codes
      Loaders::AssociationLoader.for(Assertion, :acmg_codes).load(object)
    end

    def clingen_codes
      Loaders::AssociationLoader.for(Assertion, :clingen_codes).load(object)
    end

    def molecular_profile
      Loaders::RecordLoader.for(MolecularProfile).load(object.molecular_profile_id)
    end

    def regulatory_approval
      object.fda_regulatory_approval
    end

    def regulatory_approval_last_updated
      Loaders::AssociationLoader.for(Assertion, :revisions).load(object).then do | revisions |
        regulatory_revisions = revisions.select { |r| r.field_name == "fda_regulatory_approval" && r.status == "accepted" }
        if !regulatory_revisions.empty?
          regulatory_revisions.last.updated_at
        else
          nil
        end
      end
    end

    def fda_companion_test_last_updated
      Loaders::AssociationLoader.for(Assertion, :revisions).load(object).then do | revisions |
        regulatory_revisions = revisions.select { |r| r.field_name == "fda_companion_test" && r.status == "accepted" }
        if !regulatory_revisions.empty?
          regulatory_revisions.last.updated_at
        else
          nil
        end
      end
    end

    def nccn_guideline
      Loaders::AssociationLoader.for(Assertion, :nccn_guideline).load(object)
    end

    def submission_event
      Loaders::AssociationLoader.for(Assertion, :submission_event).load(object)
    end

    def submission_activity
      Loaders::AssociationLoader.for(Assertion, :submission_activity).load(object)
    end

    def acceptance_event
      Loaders::AssociationLoader.for(Assertion, :acceptance_event).load(object)
    end

    def rejection_event
      Loaders::AssociationLoader.for(Assertion, :rejection_event).load(object)
    end

    def endorsements
      Loaders::AssociationLoader.for(Assertion, :endorsements).load(object)
    end
  end
end
