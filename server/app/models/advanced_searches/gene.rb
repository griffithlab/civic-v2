module AdvancedSearches
  class Gene < AdvancedSearches::Base
    def base_query
      ::Gene.left_outer_joins(:gene_aliases)
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

      (clause, value) = node.id.resolve_query_for_type("genes.id")
      base_query.where(clause, value)
    end

    def resolve_entrez_id_filter(node)
      if node.entrez_id.nil?
        return nil
      end

      (clause, value) = node.entrez_id.resolve_query_for_type("genes.entrez_id")
      base_query.where(clause, value)
    end

    def resolve_entrez_symbol_filter(node)
      if node.entrez_symbol.nil?
        return nil
      end

      (clause, value) = node.entrez_symbol.resolve_query_for_type("genes.name")
      base_query.where(clause, value)
    end

    def resolve_description_filter(node)
      if node.description.nil?
        return nil
      end

      (clause, value) = node.description.resolve_query_for_type("genes.description")
      base_query.where(clause, value)
    end

    def resolve_alias_filter(node)
      if node.alias.nil?
        return nil
      end

      (clause, value) = node.alias.resolve_query_for_type("gene_aliases.name")
      base_query.where(clause, value)
    end

    def resolve_open_revision_count_filter(node)
      if node.open_revision_count.nil?
        return nil
      end

      (clause, value) = node.open_revision_count.resolve_query_for_type("count(revisions.id)")

      matching_ids = ::Gene.joins(:revisions)
        .where("status = 'new'")
        .group("genes.id")
        .having(clause, value)
        .distinct
        .pluck("genes.id")

      base_query.where(id: matching_ids)
    end

    def resolve_has_assertion_filter(node)
      if node.has_assertion.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(molecular_profile: { variants: :gene }).distinct.pluck("genes.id")


      if node.has_assertion.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end
  end
end
