module Types::AdvancedSearch
  class AssertionSearchFilterType < Types::BaseInputObject
    # Basic fields
    argument :id, Types::AdvancedSearch::IntSearchInput, required: false
    argument :name, Types::AdvancedSearch::StringSearchInput, required: false
    argument :description, Types::AdvancedSearch::StringSearchInput, required: false
    argument :summary, Types::AdvancedSearch::StringSearchInput, required: false

    # Classification fields
    argument :significance, Types::AdvancedSearch::EnumSearchInput.for(Types::AssertionSignificanceType), required: false
    argument :assertion_direction, Types::AdvancedSearch::EnumSearchInput.for(Types::AssertionDirectionType), required: false
    argument :assertion_type, Types::AdvancedSearch::EnumSearchInput.for(Types::AssertionTypeType), required: false
    argument :status, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceStatusType), required: false
    argument :variant_origin, Types::AdvancedSearch::EnumSearchInput.for(Types::VariantOriginType), required: false

    # Regulatory fields
    argument :regulatory_approval, Types::AdvancedSearch::BooleanSearchInput, required: false
    argument :fda_companion_test, Types::AdvancedSearch::BooleanSearchInput, required: false
    argument :nccn_guideline_version, Types::AdvancedSearch::StringSearchInput, required: false

    # Classification codes
    argument :amp_level, Types::AdvancedSearch::EnumSearchInput.for(Types::AmpLevelType), required: false
    argument :has_acmg_codes, Types::AdvancedSearch::BooleanSearchInput, required: false
    argument :has_clingen_codes, Types::AdvancedSearch::BooleanSearchInput, required: false

    # Therapy related
    argument :therapy_interaction_type, Types::AdvancedSearch::EnumSearchInput.for(Types::TherapyInteractionType), required: false
    argument :therapy_name, Types::AdvancedSearch::StringSearchInput, required: false

    # Counts and flags
    argument :evidence_items_count, Types::AdvancedSearch::IntSearchInput, required: false
    argument :is_flagged, Types::AdvancedSearch::BooleanSearchInput, required: false
    argument :open_revision_count, Types::AdvancedSearch::IntSearchInput, required: false

    # Disease related
    argument :disease_id, Types::AdvancedSearch::IntSearchInput, required: false
    argument :disease_name, Types::AdvancedSearch::StringSearchInput, required: false

    # Molecular Profile related
    argument :molecular_profile_id, Types::AdvancedSearch::IntSearchInput, required: false

    # Phenotype related
    argument :has_phenotypes, Types::AdvancedSearch::BooleanSearchInput, required: false

    # Endorsements
    argument :has_endorsements, Types::AdvancedSearch::BooleanSearchInput, required: false

    # Complex search support
    argument :sub_filters, [ Types::AdvancedSearch::AssertionSearchFilterType ], required: false
    argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
  end
end
