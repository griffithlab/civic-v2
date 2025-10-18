module AdvancedSearches
  class Disease < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Name
    include AdvancedSearches::Shared::Deprecated

    def base_query
      ::Disease.left_outer_joins(:disease_aliases)
    end

    def table_name
      "diseases"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_doid_filter(node),
        resolve_deprecated_filter(node),
        resolve_disease_aliases_filter(node),
      ]
    end


    def resolve_display_name_filter(node)
      if node.display_name.nil?
        return nil
      end
      clause, value = node.display_name.resolve_query_for_type("diseases.display_name")
      base_query.where(clause, value)
    end

    def resolve_doid_filter(node)
      if node.doid.nil?
        return nil
      end
      # We store DOID in the db just as the number component, but we want users to be able to search with DOID:123
      node.doid.resolve_ontology_query(
        base_query,
        "diseases.doid",
        value_override: node.doid.value.sub("DOID:", "")
      )
    end

    def resolve_deprecated_filter(node)
      if node.deprecated.nil?
        return nil
      end
      clause, value = node.deprecated.resolve_query_for_type("diseases.deprecated")
      base_query.where(clause, value)
    end

    def resolve_disease_aliases_filter(node)
      if node.disease_aliases.nil?
        return nil
      end
      clause, value = node.disease_aliases.resolve_query_for_type("disease_aliases.name")
      base_query.where(clause, value)
    end
  end
end
