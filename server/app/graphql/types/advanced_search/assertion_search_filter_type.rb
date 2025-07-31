module Types
    module AdvancedSearch
        class AssertionSearchFilterType < Types::BaseInputObject
            argument :sub_filters, [ Types::AdvancedSearch::AssertionSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
            argument :assertion_type, Types::AdvancedSearch::EnumSearchInput.for(Types::AssertionTypeType), required: false
            argument :amp_level, Types::AdvancedSearch::EnumSearchInput.for(Types::AmpLevelType), required: false
            argument :regulatory_approval, Types::AdvancedSearch::BooleanSearchInput, required: false
            argument :evidence_items_count, Types::AdvancedSearch::IntSearchInput, required: false
            argument :description, Types::AdvancedSearch::StringSearchInput, required: false
            argument :disease, Types::AdvancedSearch::DiseaseSearchFilterType, required: false
            argument :assertion_direction, Types::AdvancedSearch::EnumSearchInput.for(Types::AssertionDirectionType), required: false
            argument :evidence_items, Types::AdvancedSearch::EvidenceItemSearchFilterType, required: false
            argument :fda_companion_test, Types::AdvancedSearch::BooleanSearchInput, required: false
            argument :molecular_profile, Types::AdvancedSearch::MolecularProfileSearchFilterType, required: false
            argument :name, Types::AdvancedSearch::StringSearchInput, required: false
            argument :phenotypes, Types::AdvancedSearch::PhenotypeSearchFilterType, required: false
            argument :significance, Types::AdvancedSearch::EnumSearchInput.for(Types::AssertionSignificanceType), required: false
            argument :status, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceStatusType), required: false
            argument :therapies, Types::AdvancedSearch::TherapySearchFilterType, required: false
            argument :id, Types::AdvancedSearch::IntSearchInput, required: false
            argument :variant_origin, Types::AdvancedSearch::EnumSearchInput.for(Types::VariantOriginType), required: false
        end
    end
end