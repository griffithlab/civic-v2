module AdvancedSearches
  class FDACode < AdvancedSearches::Base
    def base_query
      ::FDACode
    end

    def resolve_search_fields(node)
      [
        resolve_code_filter(node),
        resolve_description_filter(node)
      ]
    end

    def resolve_code_filter(node)
      return nil if node.code.nil?
      clause, value = node.code.resolve_query_for_type("fda_codes.code")
      base_query.where(clause, value)
    end

    def resolve_description_filter(node)
      return nil if node.description.nil?
      clause, value = node.description.resolve_query_for_type("fda_codes.description")
      base_query.where(clause, value)
    end
  end
end