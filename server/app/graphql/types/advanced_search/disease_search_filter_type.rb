module Types
  module AdvancedSearch
    class DiseaseSearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::DiseaseSearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :deprecated, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :disease_aliases, Types::AdvancedSearch::StringSearchInput, required: false
      argument :doid, Types::AdvancedSearch::StringSearchInput, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :name, Types::AdvancedSearch::StringSearchInput, required: false
    end
  end
end
