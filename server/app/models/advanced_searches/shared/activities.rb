module AdvancedSearches
  module Shared
    module Activities
      def resolve_activity_user(node_value, activity_names)
        return nil if node_value.nil?
        user_ids = AdvancedSearches::User.new(query: node_value).results
        base_ids = base_query.joins(activities: [ :user ])
          .where(
            activities: { type: Array(activity_names) },
            users: { id: user_ids }
          ).select(:id)
        base_query.where(id: base_ids)
      end

      def base_query
        raise StandardError.new("Must implement base_query for shared activity filters")
      end

      def table_name
        raise StandardError.new("Must implement table_name for shared filters")
      end
    end
  end
end
