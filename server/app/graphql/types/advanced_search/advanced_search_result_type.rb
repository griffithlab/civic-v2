module Types::AdvancedSearch
  class AdvancedSearchResultType < Types::BaseObject
    field :result_ids, [ Int ], null: false
    field :permalink_id, String, null: true
    field :search_endpoint, String, null: false
    field :original_query, GraphQL::Types::JSON, null: false
  end
end
