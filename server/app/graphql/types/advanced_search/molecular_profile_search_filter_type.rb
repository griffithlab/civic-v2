module Types
  module AdvancedSearch
    class MolecularProfileSearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::MolecularProfileSearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :description, Types::AdvancedSearch::StringSearchInput, required: false
      argument :alias, Types::AdvancedSearch::StringSearchInput, required: false
      argument :open_revision_count, Types::AdvancedSearch::IntSearchInput, required: false
      argument :is_flagged, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :has_assertion, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :score, Types::AdvancedSearch::FloatSearchInput, required: false
      argument :evidence_items_count, Types::AdvancedSearch::IntSearchInput, required: false
      argument :source, Types::AdvancedSearch::SourceSearchFilterType, required: false
      argument :creating_user, Types::AdvancedSearch::UserSearchFilterType, required: false
      argument :deprecating_user, Types::AdvancedSearch::UserSearchFilterType, required: false
    end
  end
end
