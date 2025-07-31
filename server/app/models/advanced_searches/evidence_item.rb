module AdvancedSearches
  class EvidenceItem < AdvancedSearches::Base
    def base_query
      ::EvidenceItem
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        # resolve_name_filter(node), #Name is a function based on ID so I should be able to ignore this
        resolve_description_filter(node),
        resolve_open_revision_count_filter(node),
        # resolve_evidence_direction_filter(node), # Invalid input syntax for type integer, something is going wrong with EnumSearchInput
        # resolve_evidence_level_filter(node), # Same error as above, maybe I need to convert something somehow?
        resolve_evidence_rating_filter(node),
        # resolve_evidence_type_filter(node), # Another EnumSearchInput error
        resolve_flagged_filter(node),
        resolve_significance_filter(node),
        resolve_variant_hgvs_filter(node),
        resolve_evidence_source_filter(node),
        resolve_disease_filter(node),
        resolve_phenotypes_filter(node),
        resolve_therapies_filter(node),
        # resolve_therapy_interaction_type_filter(node), # As per usual Enums are problematic
        resolve_molecular_profile_filter(node),
        resolve_assertion_filter(node),
        # resolve_comment_filter(node), # Comment is being weird and I am not entirely sure why, various errors depending on how you write it
      ]
    end

    def resolve_id_filter(node)
      return nil if node.id.nil?
      clause, value = node.id.resolve_query_for_type("evidence_items.id")
      base_query.where(clause, value)
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("evidence_items.id") 
      # If I knew how to combine this to be EID#{id} like the function call, I could make it work
      base_query.where(clause, value)
    end

    def resolve_description_filter(node)
      return nil if node.description.nil?
      clause, value = node.description.resolve_query_for_type("evidence_items.description")
      base_query.where(clause, value)
    end

    def resolve_open_revision_count_filter(node)
      return nil if node.open_revision_count.nil?
      clause, value = node.open_revision_count.resolve_query_for_type("count(revisions.id)")
      matching_ids = ::EvidenceItem.joins(:revisions)
        .where("revisions.status = 'new'")
        .group("evidence_items.id")
        .having(clause, value)
        .pluck("evidence_items.id")
      base_query.where(id: matching_ids)
    end

    def resolve_evidence_direction_filter(node)
      return nil if node.evidence_direction.nil?
      clause, value = node.evidence_direction.resolve_query_for_type("evidence_items.evidence_direction")
      base_query.where(clause, value)
    end

    def resolve_evidence_level_filter(node)
      return nil if node.evidence_level.nil?
      clause, value = node.evidence_level.resolve_query_for_type("evidence_items.evidence_level")
      base_query.where(clause, value)
    end

    def resolve_evidence_rating_filter(node)
      return nil if node.evidence_rating.nil?
      clause, value = node.evidence_rating.resolve_query_for_type("evidence_items.rating")
      base_query.where(clause, value)
    end

    def resolve_evidence_type_filter(node)
      return nil if node.evidence_type.nil?
      clause, value = node.evidence_type.resolve_query_for_type("evidence_items.evidence_type")
      base_query.where(clause, value)
    end

    def resolve_flagged_filter(node)
      return nil if node.flagged.nil?
      clause, value = node.flagged.resolve_query_for_type("evidence_items.flagged")
      base_query.where(clause, value)
    end

    def resolve_significance_filter(node)
      return nil if node.significance.nil?
      clause, value = node.significance.resolve_query_for_type("evidence_items.significance")
      base_query.where(clause, value)
    end

    def resolve_variant_hgvs_filter(node)
      return nil if node.variant_hgvs.nil?
      clause, value = node.variant_hgvs.resolve_query_for_type("evidence_items.variant_hgvs")
      base_query.where(clause, value)
    end

    def resolve_evidence_source_filter(node)
      return nil if node.source.nil?
      source_ids = ::AdvancedSearches::Source.new(query: node.source).results
      evidence_item_ids = ::EvidenceItem.joins(:source).where(source: {id: source_ids}).select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_disease_filter(node)
      if node.disease.nil?
        return nil
      end
      disease_ids = ::AdvancedSearches::Disease.new(query: node.disease).results
      evidence_item_ids = ::EvidenceItem.joins(:disease).where(disease: {id: disease_ids}).select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_phenotypes_filter(node)
      return nil if node.phenotypes.nil?
      phenotype_ids = ::AdvancedSearches::Phenotype.new(query: node.phenotypes).results
      evidence_item_ids = ::EvidenceItem.joins(:phenotypes).where(phenotypes: {id: phenotype_ids}).select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_therapies_filter(node)
      return nil if node.therapies.nil?
      therapy_ids = ::AdvancedSearches::Therapy.new(query: node.therapies).results
      evidence_item_ids = ::EvidenceItem.joins(:therapies).where(therapies: {id: therapy_ids}).select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_therapy_interaction_type_filter(node)
      return nil if node.therapy_interaction_type.nil?
      clause, value = node.therapy_interaction_type.resolve_query_for_type("evidence_items.therapy_interaction_type")
      base_query.where(clause, value)
    end

    def resolve_molecular_profile_filter(node)
      return nil if node.molecular_profile.nil?
      mp_ids = ::AdvancedSearches::MolecularProfile.new(query: node.molecular_profile).results
      evidence_item_ids = ::EvidenceItem.joins(:molecular_profile).where(molecular_profile: {id: mp_ids}).select(:id)

      base_query.where(id: evidence_item_ids)
    end

    def resolve_assertion_filter(node)
      return nil if node.assertion.nil?
      assertion_ids = ::AdvancedSearches::Assertion.new(query: node.assertion).results
      evidence_item_ids = ::EvidenceItem.joins(:assertions).where(assertions: {id: assertion_ids}).select(:id) # Not sure why this one wants assertions plural but oh well
      base_query.where(id: evidence_item_ids)
    end

    def resolve_comment_filter(node)
      return nil if node.comment.nil?
      comment_ids = ::AdvancedSearches::Comment.new(query: node.comment).results
      evidence_item_ids = ::EvidenceItem.joins(:comment).where(comment: {id: comment_ids}).select(:id)
      base_query.where(id: evidence_item_ids)
    end
  end
end
