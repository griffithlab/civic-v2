module Types::AdvancedSearch
  class AdvancedSearchResultType < Types::BaseObject
    field :result_ids, [ Int ], null: false
    field :permalink_id, String, null: true
    field :search_endpoint, String, null: false
    field :results, [Types::Interfaces::SearchableEntityInterface], null: false
  end
end
