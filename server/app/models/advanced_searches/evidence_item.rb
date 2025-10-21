module AdvancedSearches
  class EvidenceItem < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Status
    include AdvancedSearches::Shared::Flagged
    include AdvancedSearches::Shared::Description
    include AdvancedSearches::Shared::Activities

    def base_query
      ::EvidenceItem
    end

    def table_name
      "evidence_items"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_description_filter(node),
        resolve_open_revision_count_filter(node),
        resolve_evidence_direction_filter(node),
        resolve_evidence_level_filter(node),
        resolve_evidence_rating_filter(node),
        resolve_evidence_type_filter(node),
        resolve_is_flagged_filter(node),
        resolve_significance_filter(node),
        resolve_evidence_source_filter(node),
        resolve_disease_filter(node),
        resolve_phenotypes_filter(node),
        resolve_therapies_filter(node),
        resolve_therapy_interaction_type_filter(node),
        resolve_molecular_profile_filter(node),
        resolve_assertion_filter(node),
        resolve_comment_filter(node),
        resolve_status_filter(node),
        resolve_activity_user(node.creating_user, "SubmitEvidenceItemActivity"),
        resolve_activity_user(node.moderating_user, "ModerateEvidenceItemActivity"),
        resolve_revisions_filter(node),
      ]
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
      node.evidence_direction.resolve_query_for_activerecord_enum(base_query, "evidence_items.evidence_direction")
    end

    def resolve_evidence_level_filter(node)
      return nil if node.evidence_level.nil?
      node.evidence_level.resolve_query_for_activerecord_enum(base_query, "evidence_items.evidence_level")
    end

    def resolve_evidence_rating_filter(node)
      return nil if node.evidence_rating.nil?
      clause, value = node.evidence_rating.resolve_query_for_type("evidence_items.rating")
      base_query.where(clause, value)
    end

    def resolve_evidence_type_filter(node)
      return nil if node.evidence_type.nil?
      node.evidence_type.resolve_query_for_activerecord_enum(base_query, "evidence_items.evidence_type")
    end

    def resolve_significance_filter(node)
      return nil if node.significance.nil?
      node.significance.resolve_query_for_activerecord_enum(base_query, "evidence_items.significance")
    end

    def resolve_evidence_source_filter(node)
      return nil if node.source.nil?
      source_ids = ::AdvancedSearches::Source.new(query: node.source).results
      evidence_item_ids = ::EvidenceItem.joins(:source).where(source: { id: source_ids }).select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_disease_filter(node)
      if node.disease.nil?
        return nil
      end
      disease_ids = ::AdvancedSearches::Disease.new(query: node.disease).results
      evidence_item_ids = ::EvidenceItem.joins(:disease).where(disease: { id: disease_ids }).select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_phenotypes_filter(node)
      return nil if node.phenotypes.nil?
      phenotype_ids = ::AdvancedSearches::Phenotype.new(query: node.phenotypes).results
      evidence_item_ids = ::EvidenceItem.joins(:phenotypes).where(phenotypes: { id: phenotype_ids }).select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_therapies_filter(node)
      return nil if node.therapies.nil?
      therapy_ids = ::AdvancedSearches::Therapy.new(query: node.therapies).results
      evidence_item_ids = ::EvidenceItem.joins(:therapies).where(therapies: { id: therapy_ids }).select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_therapy_interaction_type_filter(node)
      return nil if node.therapy_interaction_type.nil?
      node.therapy_interaction_type.resolve_query_for_activerecord_enum(base_query, "evidence_items.therapy_interaction_type")
    end

    def resolve_molecular_profile_filter(node)
      return nil if node.molecular_profile.nil?
      mp_ids = ::AdvancedSearches::MolecularProfile.new(query: node.molecular_profile).results
      evidence_item_ids = ::EvidenceItem.joins(:molecular_profile).where(molecular_profile: { id: mp_ids }).select(:id)

      base_query.where(id: evidence_item_ids)
    end

    def resolve_assertion_filter(node)
      return nil if node.assertion.nil?
      assertion_ids = ::AdvancedSearches::Assertion.new(query: node.assertion).results
      evidence_item_ids = ::EvidenceItem.joins(:assertions).where(assertions: { id: assertion_ids }).select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_comment_filter(node)
      return nil if node.comment.nil?
      comment_ids = ::AdvancedSearches::Comment.new(query: node.comment).results
      evidence_item_ids = ::EvidenceItem.joins(:comments)
        .where(comments: { id: comment_ids })
        .select(:id)
      base_query.where(id: evidence_item_ids)
    end

    def resolve_revisions_filter(node)
      return nil if node.revisions.nil?
      revision_ids = AdvancedSearches::Revision.new(query: node.revisions).results
      eids = ::EvidenceItem.joins(:revisions)
        .where(revisions: { id: revision_ids })
        .pluck(:id)
      base_query.where(id: eids)
    end
  end
end
