module Types::AdvancedSearch
  class FeatureSearchFilterType < Types::BaseInputObject
    argument :id, Types::AdvancedSearch::IntSearchInput, required: false
    argument :entrez_id, Types::AdvancedSearch::IntSearchInput, required: false
    argument :entrez_symbol, Types::AdvancedSearch::StringSearchInput, required: false
    argument :description, Types::AdvancedSearch::StringSearchInput, required: false
    argument :alias, Types::AdvancedSearch::StringSearchInput, required: false
    argument :open_revision_count, Types::AdvancedSearch::IntSearchInput, required: false
    argument :has_assertion, Types::AdvancedSearch::BooleanSearchInput, required: false
    argument :sub_filters, [ Types::AdvancedSearch::FeatureSearchFilterType ], required: false
    argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
  end
end
