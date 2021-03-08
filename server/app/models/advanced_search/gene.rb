module AdvancedSearch
  class Gene
    attr_reader :query
    def initialize(query:)
      @query = query
    end

    def results
      process_node(query).pluck(:id)
    end

    private
    def process_node(node)
      supplied_search_fields = []

      supplied_search_fields << resolve_id_filter(node)
      supplied_search_fields << resolve_entrez_id_filter(node)
      supplied_search_fields << resolve_entrez_symbol_filter(node)
      supplied_search_fields << resolve_description_filter(node)

      supplied_search_fields.compact!

      validate_node(node, supplied_search_fields)

      if supplied_search_fields.any?
        base_query = supplied_search_fields.first

        q = if supplied_search_fields.size == 1
              base_query
            else
              operation = node.operation.downcase.to_sym
              supplied_search_fields[1..-1].inject(base_query) do |q, f|
                q.send(operation, f)
              end
            end

        if node.sub_filters
          operation = node.operation.downcase.to_sym
          node.sub_filters.inject(q) do |q, f|
            q.send(operation, process_node(f))
          end
        else
          return q
        end
      else
        base_query = process_node(node.sub_filters.first)
        if node.sub_filters.size == 1
          base_query
        else
          operation = node.operation.downcase.to_sym
          node.sub_filters[1..-1].inject(base_query) do |q, f|
            q.send(operation, process_node(f))
          end
        end
      end
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

    def validate_node(node, fields)

      if fields.empty? && node.sub_filters.nil?
        raise StandardError.new('Node has no filters.')
      end

      if fields.size == 1 && node.sub_filters.nil?
        return true
      end

      if node.operation.nil?
        raise StandardError.new('Must supply an operation.')
      end
    end
  end
end