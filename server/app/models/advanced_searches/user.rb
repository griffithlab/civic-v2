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
      clause, value = node.organization_name.resolve_query_for_type("name_organizations.name")
      base_query
        .joins("INNER JOIN affiliations name_affiliations ON name_affiliations.user_id = users.id INNER JOIN organizations name_organizations ON name_organizations.id = name_affiliations.organization_id")
        .where(clause, value)
    end

    def resolve_organization_id_filter(node)
      return nil if node.organization_id.nil?
      clause, value = node.organization_id.resolve_query_for_type("id_organizations.id")
      base_query
        .joins("INNER JOIN affiliations id_affiliations ON id_affiliations.user_id = users.id INNER JOIN organizations id_organizations ON id_organizations.id = id_affiliations.organization_id")
        .where(clause, value)
    end
  end
end
