module Types
    module AdvancedSearch
        class CommentSearchFilterType < Types::BaseInputObject
            argument :sub_filters, [ Types::AdvancedSearch::CommentSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
            argument :comment, Types::AdvancedSearch::StringSearchInput, required: false
            argument :created_at, Types::AdvancedSearch::DateSearchInput, required: false
            argument :id, Types::AdvancedSearch::IntSearchInput, required: false
            argument :link, Types::AdvancedSearch::StringSearchInput, required: false
            argument :name, Types::AdvancedSearch::StringSearchInput, required: false
            argument :title, Types::AdvancedSearch::StringSearchInput, required: false
        end
    end
end
