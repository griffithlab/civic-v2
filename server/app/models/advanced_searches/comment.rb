module AdvancedSearches
  class Comment < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::CreatedAt

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
  end
end
