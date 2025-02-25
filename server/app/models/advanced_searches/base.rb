module AdvancedSearches
  class Base
    attr_reader :query
    def initialize(query:)
      @query = query
    end

    def results
      process_node(query).distinct.pluck(:id)
    end

    private
    def process_node(node)
      supplied_search_fields = resolve_search_fields(node)
      supplied_search_fields.compact!

      validate_node(node, supplied_search_fields)

      operator = node.boolean_operator&.downcase&.to_sym

      if supplied_search_fields.any?
        base_query = supplied_search_fields.first

        q = if supplied_search_fields.size == 1
              base_query
        else
              supplied_search_fields[1..-1].inject(base_query) do |q, f|
                q.send(operator, f)
              end
        end

        if node.sub_filters
          node.sub_filters.inject(q) do |q, f|
            q.send(operator, process_node(f))
          end
        else
          q
        end
      else
        base_query = process_node(node.sub_filters.first)
        if node.sub_filters.size == 1
          base_query
        else
          node.sub_filters[1..-1].inject(base_query) do |q, f|
            q.send(operator, process_node(f))
          end
        end
      end
    end

    def validate_node(node, fields)
      if fields.empty? && node.sub_filters.nil?
        raise StandardError.new("Node has no filters.")
      end

      if fields.size == 1 && node.sub_filters.nil?
        return true
      end

      if node.boolean_operator.nil?
        raise StandardError.new("Must supply a boolean operator.")
      end
    end

    def resolve_search_fields
      raise StandardError.new("Must implement in child class.")
    end
  end
end
