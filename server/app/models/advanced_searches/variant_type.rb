module AdvancedSearches
  class VariantType < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Name
    include AdvancedSearches::Shared::Description

    def base_query
      ::VariantType.all
    end

    def self.table_name
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
      clause, value = node.soid.resolve_query_for_type("variant_types.soid")
      base_query.where(clause, value)
    end
  end
end
