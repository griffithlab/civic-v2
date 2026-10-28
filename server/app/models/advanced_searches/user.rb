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
        resolve_organizations_filter(node),
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

    def resolve_organizations_filter(node)
      return nil if node.organizations.nil?
      organization_ids = ::AdvancedSearches::Organization.new(query: node.organizations).results
      user_ids = ::User.joins(:organizations).where(organizations: { id: organization_ids }).select(:id)
      base_query.where(id: user_ids)
    end
  end
end
