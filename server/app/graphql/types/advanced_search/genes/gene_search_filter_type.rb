module Types::AdvancedSearch::Genes
  class GeneSearchFilterType < Types::BaseInputObject
    argument :id, Types::AdvancedSearch::IntSearchInput, required: false
    argument :entrez_id, Types::AdvancedSearch::IntSearchInput, required: false
    argument :entrez_symbol, Types::AdvancedSearch::StringSearchInput, required: false
    argument :description, Types::AdvancedSearch::StringSearchInput, required: false
    argument :sub_filters, [Types::AdvancedSearch::Genes::GeneSearchFilterType], required: false
    argument :operation, Types::AdvancedSearch::BooleanOperator, required: false
  end
end
