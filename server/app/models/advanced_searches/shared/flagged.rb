module AdvancedSearches
  module Shared
    module Flagged
      def resolve_is_flagged_filter(node)
        if node.is_flagged.nil?
          return nil
        end

        (clause, value) = node.is_flagged.resolve_query_for_type("#{table_name}.flagged")
        base_query.where(clause, value)
      end

      def table_name
        raise StandardError.new("Must implement table_name for shared filters")
      end
    end
  end
end
