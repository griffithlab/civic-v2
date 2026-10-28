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
        resolve_has_assertion_filter(node),
        resolve_assertion_filter(node),
        resolve_has_evidence_item_filter(node),
        resolve_evidence_items_filter(node),
      ]
    end

    def resolve_is_deprecated_filter(node)
      if node.deprecated.nil?
        return nil
      end
      clause, value = node.deprecated.resolve_query_for_type("therapies.deprecated")
      base_query.where(clause, value)
    end

    def resolve_ncit_id_filter(node)
      return nil if node.ncit_id.nil?
      node.ncit_id.resolve_ontology_query(base_query, "therapies.ncit_id")
    end

    def resolve_therapy_aliases_filter(node)
      return nil if node.therapy_aliases.nil?
      clause, value = node.therapy_aliases.resolve_query_for_type("therapy_aliases.name")
      base_query.where(clause, value)
    end

    def resolve_has_assertion_filter(node)
      if node.has_assertion.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(:therapies).distinct.pluck("therapies.id")

      if node.has_assertion.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    def resolve_assertion_filter(node)
      return nil if node.assertion.nil?
      assertion_ids = ::AdvancedSearches::Assertion.new(query: node.assertion).results
      therapy_ids = ::Therapy.joins(:assertions).where(assertions: { id: assertion_ids }).select(:id)
      base_query.where(id: therapy_ids)
    end

    def resolve_has_evidence_item_filter(node)
      if node.has_evidence_item.nil?
        return nil
      end

      matching_ids = ::EvidenceItem.joins(:therapies).distinct.pluck("therapies.id")

      if node.has_evidence_item.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    def resolve_evidence_items_filter(node)
      return nil if node.evidence_items.nil?
      matching_ids = ::AdvancedSearches::EvidenceItem.new(query: node.evidence_items).results
      therapy_ids = ::Therapy.joins(:evidence_items).where(evidence_items: { id: matching_ids }).select(:id)
      base_query.where(id: therapy_ids)
    end
  end
end
