module Types
  module AdvancedSearch
    class ActivitySearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::ActivitySearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :type, Types::AdvancedSearch::StringSearchInput, required: false
      argument :user, Types::AdvancedSearch::UserSearchFilterType, required: false
      argument :organization, Types::AdvancedSearch::OrganizationSearchFilterType, required: false
      argument :created_at, Types::AdvancedSearch::DateSearchInput, required: false
    end
  end
end
