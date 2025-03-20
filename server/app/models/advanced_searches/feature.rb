module AdvancedSearches
  class Feature < AdvancedSearches::Base
    def base_query
      ::Feature.left_outer_joins(:feature_aliases)
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_entrez_id_filter(node),
        resolve_entrez_symbol_filter(node),
        resolve_description_filter(node),
        resolve_alias_filter(node),
        resolve_open_revision_count_filter(node),
        resolve_has_assertion_filter(node),
      ]
    end

    def resolve_id_filter(node)
      if node.id.nil?
        return nil
      end

      (clause, value) = node.id.resolve_query_for_type("features.id")
      base_query.where(clause, value)
    end

    def resolve_entrez_id_filter(node)
      if node.entrez_id.nil?
        return nil
      end

      (clause, value) = node.entrez_id.resolve_query_for_type("genes.entrez_id")

      matching_ids = ::Features::Gene
        .joins(:feature)
        .where(clause, value)
        .pluck("features.id")

      base_query.where(id: matching_ids)
    end

    def resolve_entrez_symbol_filter(node)
      if node.entrez_symbol.nil?
        return nil
      end

      (clause, value) = node.entrez_symbol.resolve_query_for_type("features.name")
      base_query.where(clause, value)
    end

    def resolve_description_filter(node)
      if node.description.nil?
        return nil
      end

      (clause, value) = node.description.resolve_query_for_type("features.description")
      base_query.where(clause, value)
    end

    def resolve_alias_filter(node)
      if node.alias.nil?
        return nil
      end

      (clause, value) = node.alias.resolve_query_for_type("feature_aliases.name")
      base_query.where(clause, value)
    end

    def resolve_open_revision_count_filter(node)
      if node.open_revision_count.nil?
        return nil
      end

      (clause, value) = node.open_revision_count.resolve_query_for_type("count(revisions.id)")

      matching_ids = ::Feature.joins(:revisions)
        .where("status = 'new'")
        .group("features.id")
        .having(clause, value)
        .distinct
        .pluck("features.id")

      base_query.where(id: matching_ids)
    end

    def resolve_has_assertion_filter(node)
      if node.has_assertion.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(molecular_profile: { variants: [ :feature ] }).distinct.pluck("features.id")

      if node.has_assertion.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end
  end
end
