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
        resolve_has_assertion_filter(node),
        resolve_assertion_filter(node),
        resolve_has_evidence_item_filter(node),
        resolve_evidence_items_filter(node),
      ]
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("phenotypes.hpo_class")
      base_query.where(clause, value)
    end

    def resolve_hpo_id_filter(node)
      return nil if node.hpo_id.nil?
      node.hpo_id.resolve_ontology_query(base_query, "phenotypes.hpo_id")
    end

    def resolve_has_assertion_filter(node)
      if node.has_assertion.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(:phenotypes).distinct.pluck("phenotypes.id")

      if node.has_assertion.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    def resolve_assertion_filter(node)
      return nil if node.assertion.nil?
      assertion_ids = ::AdvancedSearches::Assertion.new(query: node.assertion).results
      phenotype_ids = ::Phenotype.joins(:assertions).where(assertions: { id: assertion_ids }).select(:id)
      base_query.where(id: phenotype_ids)
    end

    def resolve_has_evidence_item_filter(node)
      if node.has_evidence_item.nil?
        return nil
      end

      matching_ids = ::EvidenceItem.joins(:phenotypes).distinct.pluck("phenotypes.id")

      if node.has_evidence_item.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    def resolve_evidence_items_filter(node)
      return nil if node.evidence_items.nil?
      matching_ids = ::AdvancedSearches::EvidenceItem.new(query: node.evidence_items).results
      phenotype_ids = ::Phenotype.joins(:evidence_items).where(evidence_items: { id: matching_ids }).select(:id)
      base_query.where(id: phenotype_ids)
    end
  end
end
