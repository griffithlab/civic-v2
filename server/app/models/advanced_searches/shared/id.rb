module AdvancedSearches
  module Shared
    module Id
      def resolve_id_filter(node)
        if node.id.nil?
          return nil
        end

        (clause, value) = node.id.resolve_query_for_type("#{table_name}.id")
        base_query.where(clause, value)
      end

      def table_name
        raise StandardError.new("Must implement table_name for shared filters")
      end
    end
  end
end
