module Types
  module AdvancedSearch
    class TherapySearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::TherapySearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :deprecated, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :name, Types::AdvancedSearch::StringSearchInput, required: false
      argument :ncit_id, Types::AdvancedSearch::StringSearchInput, required: false
      argument :therapy_aliases, Types::AdvancedSearch::StringSearchInput, required: false
    end
  end
end
