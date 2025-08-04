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
            argument :evidence_direction, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceDirectionType), required: false
            argument :evidence_level, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceLevelType), required: false
            argument :evidence_rating, Types::AdvancedSearch::IntSearchInput, required: false
            argument :evidence_type, Types::AdvancedSearch::EnumSearchInput.for(Types::EvidenceTypeType), required: false
            argument :flagged, Types::AdvancedSearch::BooleanSearchInput, required: false
            argument :id, Types::AdvancedSearch::IntSearchInput, required: false
            argument :molecular_profile, Types::AdvancedSearch::MolecularProfileSearchFilterType, required: false
            argument :name, Types::AdvancedSearch::StringSearchInput, required: false
            argument :phenotypes, Types::AdvancedSearch::PhenotypeSearchFilterType, required: false
            argument :significance, Types::AdvancedSearch::IntSearchInput, required: false
            argument :source, Types::AdvancedSearch::SourceSearchFilterType, required: false
            argument :therapies, Types::AdvancedSearch::TherapySearchFilterType, required: false
            argument :therapy_interaction_type, Types::AdvancedSearch::EnumSearchInput.for(Types::TherapyInteractionType), required: false
            argument :variant_hgvs, Types::AdvancedSearch::StringSearchInput, required: false
        end
    end
end
