module Types
    module AdvancedSearch
        class PhenotypeSearchFilterType < Types::BaseInputObject
            argument :sub_filters, [ Types::AdvancedSearch::PhenotypeSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
            argument :description, Types::AdvancedSearch::StringSearchInput, required: false
            argument :hpo_id, Types::AdvancedSearch::StringSearchInput, required: false
            argument :id, Types::AdvancedSearch::IntSearchInput, required: false
            # argument :link, Types::AdvancedSearch::StringSearchInput, required: false
            argument :name, Types::AdvancedSearch::StringSearchInput, required: false
        end
    end
end