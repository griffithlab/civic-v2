module AdvancedSearches
  class Comment < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id

    def base_query
      ::Comment.unscoped
    end

    def table_name
      "comments"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_comment_filter(node),
        resolve_created_at_filter(node),
      ]
    end

    def resolve_comment_filter(node)
      return nil if node.comment.nil?
      clause, value = node.comment.resolve_query_for_type("comments.comment")
      base_query.where(clause, value)
    end

    def resolve_created_at_filter(node)
      return nil if node.created_at.nil?
      clause, value = node.created_at.resolve_query_for_type("comments.created_at")
      base_query.where(clause, value)
    end
  end
end
