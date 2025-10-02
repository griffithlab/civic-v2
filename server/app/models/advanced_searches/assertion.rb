module AdvancedSearches
  class Assertion < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Status
    include AdvancedSearches::Shared::Flagged
    include AdvancedSearches::Shared::Description

    def base_query
      ::Assertion
    end

    def table_name
      "assertions"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_assertion_type_filter(node),
        resolve_amp_level_filter(node),
        resolve_regulatory_approval_filter(node),
        resolve_evidence_item_count_filter(node),
        resolve_description_filter(node),
        resolve_disease_filter(node),
        resolve_assertion_direction_filter(node),
        resolve_evidence_items_filter(node),
        resolve_fda_companion_test_filter(node),
        resolve_molecular_profile_filter(node),
        resolve_phenotypes_filter(node),
        resolve_significance_filter(node),
        resolve_status_filter(node),
        resolve_therapies_filter(node),
        resolve_variant_origin_filter(node),
        resolve_is_flagged_filter(node),
      ]
    end

    def resolve_assertion_type_filter(node)
      return nil if node.assertion_type.nil?
      node.assertion_type.resolve_query_for_activerecord_enum(base_query, "assertions.assertion_type")
    end

    def resolve_amp_level_filter(node)
      return nil if node.amp_level.nil?
      node.amp_level.resolve_query_for_activerecord_enum(base_query, "assertions.amp_level")
    end

    def resolve_regulatory_approval_filter(node)
      return nil if node.regulatory_approval.nil?
      clause, value = node.regulatory_approval.resolve_query_for_type("assertions.regulatory_approval")
      base_query.where(clause, value)
    end

    def resolve_evidence_item_count_filter(node)
      return nil if node.evidence_item_count.nil?
      clause, value = node.evidence_item_count.resolve_query_for_type("count(evidence_items.id)")

      matching_ids = ::Assertion.joins(:evidence_items)
        .where("evidence_items.status != 'rejected'")
        .group("assertions.id")
        .having(clause, value)
        .distinct
        .pluck("assertions.id")

      base_query.where(id: matching_ids)
    end

    def resolve_disease_filter(node)
      return nil if node.disease.nil?
      disease_ids = ::AdvancedSearches::Disease.new(query: node.disease).results
      assertion_ids = ::Assertion.joins(:disease).where(diseases: { id: disease_ids }).select(:id)
      base_query.where(id: assertion_ids)
    end

    def resolve_assertion_direction_filter(node)
      return nil if node.assertion_direction.nil?
      node.assertion_direction.resolve_query_for_activerecord_enum(base_query, "assertions.assertion_direction")
    end

    def resolve_evidence_items_filter(node)
      return nil if node.evidence_items.nil?
      matching_ids = ::AdvancedSearches::EvidenceItem.new(query: node.evidence_items).results
      assertion_ids = ::Assertion.joins(:evidence_items).where(evidence_items: { id: matching_ids }).select(:id)
      base_query.where(id: assertion_ids)
    end

    def resolve_fda_companion_test_filter(node)
      return nil if node.fda_companion_test.nil?
      clause, value = node.fda_companion_test.resolve_query_for_type("assertions.fda_companion_test")
      base_query.where(clause, value)
    end

    def resolve_molecular_profile_filter(node)
      return nil if node.molecular_profile.nil?
      mp_ids = ::AdvancedSearches::MolecularProfile.new(query: node.molecular_profile).results
      assertion_ids = ::Assertion.joins(:molecular_profile).where(molecular_profiles: { id: mp_ids }).select(:id)
      base_query.where(id: assertion_ids)
    end

    def resolve_phenotypes_filter(node)
      return nil if node.phenotypes.nil?
      phenotype_ids = ::AdvancedSearches::Phenotype.new(query: node.phenotypes).results
      assertion_ids = ::Assertion.joins(:phenotypes).where(phenotypes: { id: phenotype_ids }).select(:id)
      base_query.where(id: assertion_ids)
    end

    def resolve_significance_filter(node)
      return nil if node.significance.nil?
      node.significance.resolve_query_for_activerecord_enum(base_query, "assertions.significance")
    end

    def resolve_therapies_filter(node)
      return nil if node.therapies.nil?
      therapy_ids = ::AdvancedSearches::Therapy.new(query: node.therapies).results
      assertion_ids = ::Assertion.joins(:therapies).where(therapies: { id: therapy_ids }).select(:id)
      base_query.where(id: assertion_ids)
    end

    def resolve_variant_origin_filter(node)
      return nil if node.variant_origin.nil?
      node.variant_origin.resolve_query_for_activerecord_enum(base_query, "assertions.variant_origin")
    end
  end
end
