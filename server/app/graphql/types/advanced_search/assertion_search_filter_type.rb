module Types
  module AdvancedSearch
    class AssertionSearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::AssertionSearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :assertion_type, Types::AdvancedSearch::EnumSearchInput.for(Types::AssertionTypeType, is_activerecord_enum: true), required: false
      argument :amp_level, Types::AdvancedSearch::EnumSearchInput.for(Types::AmpLevelType, is_activerecord_enum: true), required: false
      argument :regulatory_approval, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :evidence_item_count, Types::AdvancedSearch::IntSearchInput, required: false
      argument :description, Types::AdvancedSearch::StringSearchInput, required: false
      argument :disease, Types::AdvancedSearch::DiseaseSearchFilterType, required: false
      argument :assertion_direction, Types::AdvancedSearch::EnumSearchInput.for(Types::AssertionDirectionType, is_activerecord_enum: true), required: false
      argument :evidence_items, Types::AdvancedSearch::EvidenceItemSearchFilterType, required: false
      argument :fda_companion_test, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :molecular_profile, Types::AdvancedSearch::MolecularProfileSearchFilterType, required: false
      argument :name, Types::AdvancedSearch::StringSearchInput, required: false
      argument :phenotypes, Types::AdvancedSearch::PhenotypeSearchFilterType, required: false
      argument :significance, Types::AdvancedSearch::EnumSearchInput.for(Types::AssertionSignificanceType, is_activerecord_enum: true), required: false
      argument :status, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceStatusType), required: false
      argument :therapies, Types::AdvancedSearch::TherapySearchFilterType, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :variant_origin, Types::AdvancedSearch::EnumSearchInput.for(Types::VariantOriginType, is_activerecord_enum: true), required: false
      argument :is_flagged, Types::AdvancedSearch::BooleanSearchInput, required: false
    end
  end
end
