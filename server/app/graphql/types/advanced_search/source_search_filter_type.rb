module Types
  module AdvancedSearch
    class SourceSearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::SourceSearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :abstract, Types::AdvancedSearch::StringSearchInput, required: false
      argument :source_type, Types::AdvancedSearch::EnumSearchInput.for(Types::SourceSourceType, is_activerecord_enum: true), required: false
      argument :journal, Types::AdvancedSearch::StringSearchInput, required: false
      argument :citation, Types::AdvancedSearch::StringSearchInput, required: false
      argument :citation_id, Types::AdvancedSearch::StringSearchInput, required: false
      argument :title, Types::AdvancedSearch::StringSearchInput, required: false
      argument :is_retracted, Types::AdvancedSearch::BooleanSearchInput, required: false
    end
  end
end
