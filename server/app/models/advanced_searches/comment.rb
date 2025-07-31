module AdvancedSearches
  class Comment < AdvancedSearches::Base
    def base_query
      ::Comment
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_comment_filter(node),
        resolve_created_at_filter(node),
        resolve_link_filter(node),
        resolve_name_filter(node),
        resolve_title_filter(node)
      ]
    end

    def resolve_id_filter(node)
      return nil if node.id.nil?
      clause, value = node.id.resolve_query_for_type("comments.id")
      base_query.where(clause, value)
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

    def resolve_link_filter(node)
      return nil if node.link.nil?
      clause, value = node.link.resolve_query_for_type("comments.commentable_type")
      base_query.where(clause, value)
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("comments.user_display_name")
      base_query.where(clause, value)
    end

    def resolve_title_filter(node)
      return nil if node.title.nil?
      clause, value = node.title.resolve_query_for_type("comments.title")
      base_query.where(clause, value)
    end
  end
end
