module AdvancedSearches
  class User < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::CreatedAt

    def base_query
      ::User
    end

    def table_name
      "users"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_created_at_filter(node),
        resolve_username_filter(node),
        resolve_name_filter(node),
        resolve_organization_name_filter(node),
        resolve_organization_id_filter(node),
      ]
    end

    def resolve_username_filter(node)
      return nil if node.username.nil?
      clause, value = node.username.resolve_query_for_type("users.username")
      base_query.where(clause, value)
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("users.name")
      base_query.where(clause, value)
    end

    def resolve_organization_name_filter(node)
      return nil if node.organization_name.nil?
      clause, value = node.organization_name.resolve_query_for_type("organizations.name")
      ids = base_query.joins(:organizations)
        .where(clause, value)
        .select(:id)
      base_query.where(id: ids)
    end

    def resolve_organization_id_filter(node)
      return nil if node.organization_id.nil?
      clause, value = node.organization_id.resolve_query_for_type("organizations.id")
      ids = base_query.joins(:organizations)
        .where(clause, value)
        .select(:id)
      base_query.where(id: ids)
    end
  end
end
