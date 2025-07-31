module AdvancedSearches
  class Assertion < AdvancedSearches::Base
    def base_query
      ::Assertion
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_assertion_type_filter(node),
        resolve_amp_level_filter(node),
        resolve_regulatory_approval_filter(node),
        resolve_evidence_items_count_filter(node),
        resolve_description_filter(node),
        resolve_disease_filter(node),
        resolve_assertion_direction_filter(node),
        resolve_evidence_items_filter(node),
        resolve_fda_companion_test_filter(node),
        resolve_molecular_profile_filter(node),
        resolve_name_filter(node),
        resolve_phenotypes_filter(node),
        resolve_significance_filter(node),
        resolve_status_filter(node),
        resolve_therapies_filter(node),
        resolve_variant_origin_filter(node)
      ]
    end

    def resolve_id_filter(node)
      return nil if node.id.nil?
      clause, value = node.id.resolve_query_for_type("assertions.id")
      base_query.where(clause, value)
    end

    def resolve_assertion_type_filter(node)
      return nil if node.assertion_type.nil?
      clause, value = node.assertion_type.resolve_query_for_type("assertions.assertion_type")
      base_query.where(clause, value)
    end

    def resolve_amp_level_filter(node)
      return nil if node.amp_level.nil?
      clause, value = node.amp_level.resolve_query_for_type("assertions.amp_level")
      base_query.where(clause, value)
    end

    def resolve_regulatory_approval_filter(node)
      return nil if node.regulatory_approval.nil?
      clause, value = node.regulatory_approval.resolve_query_for_type("assertions.regulatory_approval")
      base_query.where(clause, value)
    end

    def resolve_evidence_items_count_filter(node)
      return nil if node.evidence_items_count.nil?
      clause, value = node.evidence_items_count.resolve_query_for_type("count(evidence_items.id)")

      matching_ids = ::Assertion.joins(:evidence_items)
        .where("evidence_items.status != 'rejected'")
        .group("assertions.id")
        .having(clause, value)
        .distinct
        .pluck("assertions.id")

      base_query.where(id: matching_ids)
    end

    def resolve_description_filter(node)
      return nil if node.description.nil?
      clause, value = node.description.resolve_query_for_type("assertions.description")
      base_query.where(clause, value)
    end

    def resolve_disease_filter(node)
      return nil if node.disease.nil?
      disease_ids = ::AdvancedSearches::Disease.new(query: node.disease).results
      assertion_ids = ::Assertion.join(:diseases).where(diseases: {id: disease_ids}).select(:id)
      base_query.where(id: assertion_ids)
    end

    def resolve_assertion_direction_filter(node)
      return nil if node.assertion_direction.nil?
      clause, value = node.assertion_direction.resolve_query_for_type("assertions.direction")
      base_query.where(clause, value)
    end

    def resolve_evidence_items_filter(node)
      return nil if node.evidence_items.nil?
      matching_ids = ::AdvancedSearches::EvidenceItem.new(query: node.evidence_items).results
      assertion_ids = ::Assertion.join(:evidence_items).where(evidence_items: {id: matching_ids}).select(:id)
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
      assertion_ids = ::Assertion.join(:molecular_profiles).where(molecular_profiles: {id: mp_ids}).select(:id)
      base_query.where(id: assertion_ids)
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("assertions.name")
      base_query.where(clause, value)
    end

    def resolve_phenotypes_filter(node)
      return nil if node.phenotypes.nil?
      phenotype_ids = ::AdvancedSearches::Phenotype.new(query: node.phenotypes).results
      assertion_ids = ::Assertion.join(:phenotypes).where(phenotypes: {id: phenotype_ids}).select(:id)
      base_query.where(id: assertion_ids)
    end

    def resolve_significance_filter(node)
      return nil if node.significance.nil?
      clause, value = node.significance.resolve_query_for_type("assertions.significance")
      base_query.where(clause, value)
    end

    def resolve_status_filter(node)
      return nil if node.status.nil?
      clause, value = node.status.resolve_query_for_type("assertions.status")
      base_query.where(clause, value)
    end

    def resolve_therapies_filter(node)
      return nil if node.therapies.nil?
      therapy_ids = ::AdvancedSearches::Therapy.new(query: node.therapies).results
      assertion_ids = ::Assertion.join(:therapies).where(therapies: {id: therapy_ids}).select(:id)
      base_query.where(id: assertion_ids)
    end

    def resolve_variant_origin_filter(node)
      return nil if node.variant_origin.nil?
      clause, value = node.variant_origin.resolve_query_for_type("assertions.variant_origin")
      base_query.where(clause, value)
    end
  end
end
