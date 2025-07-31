module AdvancedSearches
  class Phenotype < AdvancedSearches::Base
    def base_query
      ::Phenotype
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_description_filter(node),
        resolve_hpo_id_filter(node),
        # resolve_link_filter(node), # Link would require some different logic
      ]
    end

    def resolve_id_filter(node)
      return nil if node.id.nil?
      clause, value = node.id.resolve_query_for_type("phenotypes.id")
      base_query.where(clause, value)
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("phenotypes.hpo_class")
      base_query.where(clause, value)
    end

    def resolve_description_filter(node)
      return nil if node.description.nil?
      clause, value = node.description.resolve_query_for_type("phenotypes.description")
      base_query.where(clause, value)
    end

    def resolve_hpo_id_filter(node)
      return nil if node.hpo_id.nil?
      clause, value = node.hpo_id.resolve_query_for_type("phenotypes.hpo_id")
      base_query.where(clause, value)
    end

    def resolve_link_filter(node)
      return nil if node.link.nil?
      clause, value = node.link.resolve_query_for_type("phenotypes.link")
      base_query.where(clause, value)
    end

  end
end
