module AdvancedSearches
  class VariantType < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Name
    include AdvancedSearches::Shared::Description

    def base_query
      ::VariantType.all
    end

    def table_name
      "variant_types"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_description_filter(node),
        resolve_soid_filter(node),
      ]
    end

    def resolve_soid_filter(node)
      return nil if node.soid.nil?
      node.soid.resolve_ontology_query(base_query, "variant_types.soid")
    end
  end
end
