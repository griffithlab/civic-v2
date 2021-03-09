module AdvancedSearch
  class Gene < AdvancedSearch::Base
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
        resolve_open_revision_count_filter(node)
      ]
    end

    def resolve_id_filter(node)
      if node.id.nil?
        return nil
      end

      base_query.where(id: node.id.value)
    end

    def resolve_entrez_id_filter(node)
      if node.entrez_id.nil?
        return nil
      end

      base_query.where(entrez_id: node.id.value)
    end

    def resolve_entrez_symbol_filter(node)
      if node.entrez_symbol.nil?
        return nil
      end

      base_query.where(name: node.entrez_symbol.value)
    end

    def resolve_description_filter(node)
      if node.description.nil?
        return nil
      end

      base_query.where('genes.description ILIKE ?', node.description.value)
    end

    def resolve_alias_filter(node)
      if node.alias.nil?
        return nil
      end

      base_query.where('gene_aliases.name ILIKE ?', node.alias.value)
    end

    def resolve_open_revision_count_filter(node)
      if node.open_revision_count.nil?
        return nil
      end

      matching_ids = ::Gene.joins(:revisions)
        .where("status = 'new'")
        .group("genes.id")
        .having("count(revisions.id) > ?", node.open_revision_count.value)
        .distinct
        .pluck("genes.id")

      base_query.where(id: matching_ids)
    end
  end
end
