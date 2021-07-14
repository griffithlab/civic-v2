module Types::Quicksearch
  class SearchResult < Types::BaseObject
    field :id, Int, null: false
    field :result_type, Types::Quicksearch::SearchableEntities, null: false
    field :name, String, null: false
    field :matching_text, String, null: false
  end
end
