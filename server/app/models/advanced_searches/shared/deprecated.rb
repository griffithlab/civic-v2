module AdvancedSearches
  module Shared
    module Deprecated
      def resolve_is_deprecated_filter(node)
        if node.is_flagged.nil?
          return nil
        end

        (clause, value) = node.is_deprecated.resolve_query_for_type("#{table_name}.deprecated")
        base_query.where(clause, value)
      end

      def resolve_deprecation_reason_filter(node)
        return nil if node.deprecation_reason.nil?
        node.deprecation_reason.resolve_query_for_activerecord_enum(base_query, "#{table_name}.deprecation_reason")
      end

      def table_name
        raise StandardError.new("Must implement table_name for shared filters")
      end
    end
  end
end
