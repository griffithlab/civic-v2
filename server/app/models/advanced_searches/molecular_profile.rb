module AdvancedSearches
  class MolecularProfile < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Flagged
    include AdvancedSearches::Shared::Description

    def base_query
      ::MolecularProfile.left_outer_joins(:molecular_profile_aliases)
    end

    def table_name
      "molecular_profiles"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_description_filter(node),
        resolve_alias_filter(node),
        resolve_open_revision_count_filter(node),
        resolve_has_assertion_filter(node),
        resolve_is_flagged_filter(node),
        resolve_score_filter(node),
        resolve_evidence_items_count_filter(node),
        resolve_source_filter(node),
      ]
    end

    def resolve_source_filter(node)
      if node.source.nil?
        return nil
      end
      source_ids = ::AdvancedSearches::Source.new(query: node.source).results
      mp_ids = ::MolecularProfile.joins(:sources)
                            .where(sources: { id: source_ids })
                            .select(:id)
      base_query.where(id: mp_ids)
    end


    def resolve_evidence_items_count_filter(node)
      if node.evidence_items_count.nil?
        return nil
      end
      (clause, value) = node.evidence_items_count.resolve_query_for_type("count(evidence_items.id)")

      matching_ids = ::MolecularProfile.joins(:evidence_items)
        .where("status != 'rejected'")
        .group("molecular_profiles.id")
        .having(clause, value)
        .distinct
        .pluck("molecular_profiles.id")

      base_query.where(id: matching_ids)
    end

    def resolve_alias_filter(node)
      if node.alias.nil?
        return nil
      end

      (clause, value) = node.alias.resolve_query_for_type("molecular_profile_aliases.name")
      base_query.where(clause, value)
    end

    def resolve_open_revision_count_filter(node)
      if node.open_revision_count.nil?
        return nil
      end

      (clause, value) = node.open_revision_count.resolve_query_for_type("count(revisions.id)")

      matching_ids = ::MolecularProfile.joins(:revisions)
        .where("status = 'new'")
        .group("molecular_profiles.id")
        .having(clause, value)
        .distinct
        .pluck("molecular_profiles.id")

      base_query.where(id: matching_ids)
    end

    def resolve_has_assertion_filter(node)
      if node.has_assertion.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(molecular_profile: { variants: [ :feature ] }).distinct.pluck("molecular_profiles.id")

      if node.has_assertion.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    def resolve_score_filter(node)
      if node.score.nil?
        return nil
      end
      (clause, value) = node.score.resolve_query_for_type("molecular_profiles.evidence_score")
      base_query.where(clause, value)
    end
  end
end
