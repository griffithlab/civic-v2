module AdvancedSearches
  module Shared
    module Description
      def resolve_description_filter(node)
        return nil if node.description.nil?
        clause, value = node.description.resolve_query_for_type("#{table_name}.description")
        base_query.where(clause, value)
      end

      def table_name
        raise StandardError.new("Must implement table_name for shared filters")
      end
    end
  end
end
