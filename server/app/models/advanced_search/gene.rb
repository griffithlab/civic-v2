module AdvancedSearch
  class Gene < AdvancedSearch::Base
    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_entrez_id_filter(node),
        resolve_entrez_symbol_filter(node),
        resolve_description_filter(node),
      ]
    end

    def resolve_id_filter(node)
      if node.id.nil?
        return nil
      end

      ::Gene.where(id: node.id.value)
    end

    def resolve_entrez_id_filter(node)
      if node.entrez_id.nil?
        return nil
      end

      ::Gene.where(entrez_id: node.id.value)
    end

    def resolve_entrez_symbol_filter(node)
      if node.entrez_symbol.nil?
        return nil
      end

      ::Gene.where(name: node.entrez_symbol.value)
    end

    def resolve_description_filter(node)
      if node.description.nil?
        return nil
      end

      ::Gene.where('genes.description ILIKE ?', node.description.value)
    end
  end
end
