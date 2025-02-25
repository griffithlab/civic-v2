module Types::AdvancedSearch
  class AdvancedSearchResultType < Types::BaseObject
    field :result_ids, [ Int ], null: false
    field :permalink_id, String, null: true
    field :search_endpoint, String, null: false
  end
end
