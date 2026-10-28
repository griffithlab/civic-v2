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
        resolve_has_assertion_filter(node),
        resolve_assertion_filter(node),
        resolve_has_evidence_item_filter(node),
        resolve_evidence_items_filter(node),
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
        value_override: node.doid.value&.sub("DOID:", "")
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

    def resolve_has_assertion_filter(node)
      if node.has_assertion.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(:disease).distinct.pluck("diseases.id")

      if node.has_assertion.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    def resolve_assertion_filter(node)
      return nil if node.assertion.nil?
      assertion_ids = ::AdvancedSearches::Assertion.new(query: node.assertion).results
      disease_ids = ::Disease.joins(:assertions).where(assertions: { id: assertion_ids }).select(:id)
      base_query.where(id: disease_ids)
    end

    def resolve_has_evidence_item_filter(node)
      if node.has_evidence_item.nil?
        return nil
      end

      matching_ids = ::EvidenceItem.joins(:disease).distinct.pluck("diseases.id")

      if node.has_evidence_item.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    def resolve_evidence_items_filter(node)
      return nil if node.evidence_items.nil?
      matching_ids = ::AdvancedSearches::EvidenceItem.new(query: node.evidence_items).results
      disease_ids = ::Disease.joins(:evidence_items).where(evidence_items: { id: matching_ids }).select(:id)
      base_query.where(id: disease_ids)
    end
  end
end
