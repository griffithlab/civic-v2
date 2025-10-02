module AdvancedSearches
  class Therapy < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Name
    include AdvancedSearches::Shared::Deprecated

    def base_query
      ::Therapy.left_outer_joins(:therapy_aliases)
    end

    def table_name
      "therapies"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_is_deprecated_filter(node),
        resolve_ncit_id_filter(node),
        resolve_therapy_aliases_filter(node),
      ]
    end

    def resolve_ncit_id_filter(node)
      return nil if node.ncit_id.nil?
      clause, value = node.ncit_id.resolve_query_for_type("therapies.ncit_id")
      base_query.where(clause, value)
    end

    def resolve_therapy_aliases_filter(node)
      return nil if node.therapy_aliases.nil?
      clause, value = node.therapy_aliases.resolve_query_for_type("therapy_aliases.name")
      base_query.where(clause, value)
    end
  end
end
