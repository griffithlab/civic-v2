module Types
    module AdvancedSearch
        class FDACodeSearchFilterType < Types::BaseInputObject
            # Can't test this one because the class it relies on is currently nonfunctional
            argument :sub_filters, [ Types::AdvancedSearch::FDACodeSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
            argument :code, Types::AdvancedSearch::StringSearchInput, required: false
            argument :description, Types::AdvancedSearch::StringSearchInput, required: false
        end
    end
end