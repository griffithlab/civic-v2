module Types
  module AdvancedSearch
    class UserSearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::CommentSearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :username, Types::AdvancedSearch::StringSearchInput, required: false
      argument :name, Types::AdvancedSearch::StringSearchInput, required: false
      argument :created_at, Types::AdvancedSearch::DateSearchInput, required: false
      argument :organization_name, Types::AdvancedSearch::StringSearchInput, required: false
      argument :organization_id, Types::AdvancedSearch::IntSearchInput, required: false
    end
  end
end
