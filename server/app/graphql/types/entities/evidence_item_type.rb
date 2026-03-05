module Types::Entities
  class EvidenceItemType < Types::BaseObject
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :name, String, null: false
    field :molecular_profile, Types::Entities::MolecularProfileType, null: false
    field :significance, Types::EvidenceSignificanceType, null: false
    field :description, String, null: false
    field :parsed_description, [ Types::Commentable::CommentBodySegment ], null: false
    field :parsed_description_text, String, null: false
    field :parsed_description_replace_eid_with_source, [ Types::Commentable::CommentBodySegment ], null: false
    field :parsed_description_text_replace_eid_with_source, String, null: false
    field :disease, Types::Entities::DiseaseType, null: true
    field :therapies, [ Types::Entities::TherapyType ], null: false
    field :therapy_interaction_type, Types::TherapyInteractionType, null: true
    field :evidence_direction, Types::EvidenceDirectionType, null: false
    field :evidence_level, Types::EvidenceLevelType, null: false
    field :evidence_rating, Int, null: true,
      validates: { inclusion: { in: [ 1, 2, 3, 4, 5 ], allow_blank: true } }
    field :evidence_type, Types::EvidenceTypeType, null: false
    field :phenotypes, [ Types::Entities::PhenotypeType ], null: false
    field :source, Types::Entities::SourceType, null: false
    field :status, Types::EvidenceStatusType, null: false
    field :variant_hgvs, String, null: false
    field :variant_origin, Types::VariantOriginType, null: false
    field :submission_event, Types::Entities::EventType, null: false
    field :submission_activity, Types::Activities::SubmitEvidenceItemActivityType, null: false
    field :acceptance_event, Types::Entities::EventType, null: true
    field :rejection_event, Types::Entities::EventType, null: true
    field :assertions, [ Types::Entities::AssertionType ], null: false

    def parsed_description
      Rails.cache.fetch("parsed_description_#{object.class}_#{object.id}_#{object.updated_at}") do
        Actions::FormatCommentText.get_segments(text: object.description)
      end
    end

    def parsed_description_text
      Rails.cache.fetch("parsed_description_text_#{object.class}_#{object.id}_#{object.updated_at}") do
        Actions::FormatCommentText.get_segments(text: object.description, mode: "names", process_text: false).first
      end
    end

    def parsed_description_replace_eid_with_source
      Rails.cache.fetch("parsed_description_replace_eid_with_source_#{object.class}_#{object.id}_#{object.updated_at}") do
        Actions::FormatCommentText.get_segments(text: object.description, replace_eid_with_source: true)
      end
    end

    def parsed_description_text_replace_eid_with_source
      Rails.cache.fetch("parsed_description_text_replace_eid_with_source_#{object.class}_#{object.id}_#{object.updated_at}") do
        Actions::FormatCommentText.get_segments(text: object.description, mode: "names", replace_eid_with_source: true, process_text: false).first
      end
    end

    def disease
      Loaders::RecordLoader.for(Disease).load(object.disease_id)
    end

    def therapies
      Loaders::AssociationLoader.for(EvidenceItem, :therapies).load(object)
    end

    def evidence_rating
      object.rating
    end

    def molecular_profile
      Loaders::RecordLoader.for(MolecularProfile).load(object.molecular_profile_id)
    end

    def phenotypes
      Loaders::AssociationLoader.for(EvidenceItem, :phenotypes).load(object)
    end

    def source
      Loaders::RecordLoader.for(Source).load(object.source_id)
    end

    def assertions
      Loaders::AssociationLoader.for(EvidenceItem, :assertions).load(object)
    end

    def submission_event
      Loaders::AssociationLoader.for(EvidenceItem, :submission_event).load(object)
    end

    def submission_activity
      Loaders::AssociationLoader.for(EvidenceItem, :submission_activity).load(object)
    end

    def acceptance_event
      Loaders::AssociationLoader.for(EvidenceItem, :acceptance_event).load(object)
    end

    def rejection_event
      Loaders::AssociationLoader.for(EvidenceItem, :rejection_event).load(object)
    end
  end
end
