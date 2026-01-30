module Types
  module AdvancedSearch
    class EvidenceItemSearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::EvidenceItemSearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :assertion, Types::AdvancedSearch::AssertionSearchFilterType, required: false
      argument :comment, Types::AdvancedSearch::CommentSearchFilterType, required: false
      argument :open_revision_count, Types::AdvancedSearch::IntSearchInput, required: false
      argument :description, Types::AdvancedSearch::StringSearchInput, required: false
      argument :disease, Types::AdvancedSearch::DiseaseSearchFilterType, required: false
      argument :status, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceStatusType), required: false
      argument :evidence_direction, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceDirectionType, is_activerecord_enum: true), required: false
      argument :evidence_level, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceLevelType, is_activerecord_enum: true), required: false
      argument :evidence_rating, Types::AdvancedSearch::IntSearchInput, required: false
      argument :evidence_type, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceTypeType, is_activerecord_enum: true), required: false
      argument :is_flagged, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :molecular_profile, Types::AdvancedSearch::MolecularProfileSearchFilterType, required: false
      argument :phenotypes, Types::AdvancedSearch::PhenotypeSearchFilterType, required: false
      argument :significance, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceSignificanceType, is_activerecord_enum: true), required: false
      argument :source, Types::AdvancedSearch::SourceSearchFilterType, required: false
      argument :therapies, Types::AdvancedSearch::TherapySearchFilterType, required: false
      argument :therapy_interaction_type, Types::AdvancedSearch::EnumSearchInput.for(Types::TherapyInteractionType, is_activerecord_enum: true), required: false
      argument :creating_user, Types::AdvancedSearch::UserSearchFilterType, required: false
      argument :moderating_user, Types::AdvancedSearch::UserSearchFilterType, required: false
      argument :revisions, Types::AdvancedSearch::RevisionSearchFilterType, required: false
    end
  end
end
