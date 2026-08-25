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
        resolve_commenter_filter(node),
      ]
    end

    def resolve_commenter_filter(node)
      return nil if node.commenter.nil?
      user_ids = AdvancedSearches::User.new(query: node.commenter).results
      matching_ids = ::Comment.unscoped.joins(:user)
        .where(users: { id: user_ids })
        .pluck(:id)
      base_query.where(id: matching_ids)
    end

    def resolve_comment_filter(node)
      return nil if node.comment.nil?
      clause, value = node.comment.resolve_query_for_type("comments.comment")
      base_query.where(clause, value)
    end
  end
end
