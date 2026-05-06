module AdvancedSearches
  class Phenotype < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Name
    include AdvancedSearches::Shared::Description

    def base_query
      ::Phenotype
    end

    def table_name
      "phenotypes"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_description_filter(node),
        resolve_hpo_id_filter(node),
      ]
    end

    def resolve_hpo_id_filter(node)
      return nil if node.hpo_id.nil?
      node.hpo_id.resolve_ontology_query(base_query, "phenotypes.hpo_id")
    end
  end
end
