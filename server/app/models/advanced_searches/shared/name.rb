module AdvancedSearches
  module Shared
    module Name
      def resolve_name_filter(node)
        return nil if node.name.nil?
        clause, value = node.name.resolve_query_for_type("#{table_name}.name")
        base_query.where(clause, value)
      end

      def table_name
        raise StandardError.new("Must implement table_name for shared filters")
      end
    end
  end
end
