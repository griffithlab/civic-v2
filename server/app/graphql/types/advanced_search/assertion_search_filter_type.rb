module Types::AdvancedSearch
  class AssertionSearchFilterType < Types::BaseInputObject
    argument :id, Types::AdvancedSearch::IntSearchInput, required: false
    argument :description, Types::AdvancedSearch::StringSearchInput, required: false
  end
end