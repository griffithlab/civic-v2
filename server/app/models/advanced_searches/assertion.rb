module AdvancedSearches
  class Assertion < AdvancedSearches::Base
    def base_query
      ::Assertion
    end

    def resolve_search_fields(node)
      [
        # Implement assertion-specific search filters
        resolve_id_filter(node),
      ]
    end
  end
end