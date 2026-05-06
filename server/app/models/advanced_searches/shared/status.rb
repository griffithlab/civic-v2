module AdvancedSearches
  module Shared
    module Status
      def resolve_status_filter(node)
        return nil if node.status.nil?
        clause, value = node.status.resolve_query_for_type("#{table_name}.status")
        base_query.where(clause, value)
      end

      def table_name
        raise StandardError.new("Must implement table_name for shared filters")
      end
    end
  end
end
