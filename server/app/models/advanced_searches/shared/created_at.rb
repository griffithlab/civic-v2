module AdvancedSearches
  module Shared
    module CreatedAt
      def resolve_created_at_filter(node)
        return nil if node.created_at.nil?
        clause, value = node.created_at.resolve_query_for_type("comments.created_at")
        base_query.where(clause, value)
      end

      def table_name
        raise StandardError.new("Must implement table_name for shared filters")
      end
    end
  end
end
