module Types
    module AdvancedSearch
        class VariantTypeSearchFilterType < Types::BaseInputObject
            argument :sub_filters, [ Types::AdvancedSearch::VariantSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
            argument :description, Types::AdvancedSearch::StringSearchInput, required: false
            argument :id, Types::AdvancedSearch::IntSearchInput, required: false
            argument :name, Types::AdvancedSearch::StringSearchInput, required: false
            argument :soid, Types::AdvancedSearch::StringSearchInput, required: false
        end
    end
end