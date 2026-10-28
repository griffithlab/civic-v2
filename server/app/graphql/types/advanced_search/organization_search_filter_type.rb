module Types
  module AdvancedSearch
    class OrganizationSearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::OrganizationSearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :name, Types::AdvancedSearch::StringSearchInput, required: false
      argument :parent_organization, Types::AdvancedSearch::OrganizationSearchFilterType, required: false
      argument :created_at, Types::AdvancedSearch::DateSearchInput, required: false
    end
  end
end
