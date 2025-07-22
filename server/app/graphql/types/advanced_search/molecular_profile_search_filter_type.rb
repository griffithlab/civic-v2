module Types
    module AdvancedSearch
        class MolecularProfileSearchFilterType < Types::BaseInputObject
            argument :id, Types::AdvancedSearch::IntSearchInput, required: false
            argument :description, Types::AdvancedSearch::StringSearchInput, required: false
            argument :alias, Types::AdvancedSearch::StringSearchInput, required: false
            argument :open_revision_count, Types::AdvancedSearch::IntSearchInput, required: false
            argument :is_flagged, Types::AdvancedSearch::BooleanSearchInput, required: false
            argument :has_assertion, Types::AdvancedSearch::BooleanSearchInput, required: false
            argument :sub_filters, [ Types::AdvancedSearch::MolecularProfileSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
            argument :score, Types::AdvancedSearch::FloatSearchInput, required: false
            argument :evidence_items_count, Types::AdvancedSearch::IntSearchInput, required: false
            argument :source, Types::AdvancedSearch::SourceSearchFilterType, required: false
            # Unfortunately I can't figure out how to make this work. For more info see the function in 
        
        end
    end
end
