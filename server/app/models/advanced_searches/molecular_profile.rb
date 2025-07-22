module AdvancedSearches
  class MolecularProfile < AdvancedSearches::Base
    def base_query
      ::MolecularProfile.left_outer_joins(:molecular_profile_aliases)
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
        resolve_source_filter(node), # See comment in function, doesn't current work
      ]
    end

    def resolve_source_filter(node)
      if node.source.nil?
        return nil
      end
      # This doesn't work unfortunately because I can't access the search_fields from a SearchFilterType in any way I know how
      # puts "\n\n\n\n\nnode.source:"
      # puts node.source.to_h["id".to_sym]
      # puts "\n\n\n\n\nnode.source:"
      # node.source.define_singleton_method(:boolean_operator) do
      #   node.boolean_operator
      # end
      source = Source.new(query: node.source)
      # source = (Source)node.source
      # source.initialize(node.source.to_s)
      result_ids = source.results;
      base_query.where(ids: result_ids)
    end

    def resolve_id_filter(node)
      if node.id.nil?
        return nil
      end

      (clause, value) = node.id.resolve_query_for_type("molecular_profiles.id")
      base_query.where(clause, value)
    end

    def resolve_source_name_filter(node)
      if node.source_name.nil?
        return nil
      end
      as 
        # .where("status != 'rejected'")
        .group("molecular_profiles.id")
        .having(clause, value)
        .distinct
        .pluck("molecular_profiles.id")
      base_query.where(ids:matching_ids)
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

    def resolve_description_filter(node)
      if node.description.nil?
        return nil
      end

      (clause, value) = node.description.resolve_query_for_type("molecular_profiles.description")
      base_query.where(clause, value)
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

    def resolve_is_flagged_filter(node)
      if node.is_flagged.nil?
        return nil
      end

      (clause, value) = node.is_flagged.resolve_query_for_type("molecular_profiles.flagged")
      base_query.where(clause, value)
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
