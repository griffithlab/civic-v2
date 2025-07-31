module AdvancedSearches
  class VariantType < AdvancedSearches::Base
    def base_query
      ::VariantType.all
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_description_filter(node),
        resolve_soid_filter(node)
      ]
    end

    def resolve_id_filter(node)
      return nil if node.id.nil?
      clause, value = node.id.resolve_query_for_type("variant_types.id")
      base_query.where(clause, value)
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("variant_types.name")
      base_query.where(clause, value)
    end

    def resolve_description_filter(node)
      return nil if node.description.nil?
      clause, value = node.description.resolve_query_for_type("variant_types.description")
      base_query.where(clause, value)
    end

    def resolve_soid_filter(node)
      return nil if node.soid.nil?
      clause, value = node.soid.resolve_query_for_type("variant_types.soid")
      base_query.where(clause, value)
    end
  end
end
