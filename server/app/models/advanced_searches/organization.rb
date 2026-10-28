module AdvancedSearches
  class Organization < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::CreatedAt

    def base_query
      ::Organization
    end

    def table_name
      "organizations"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_created_at_filter(node),
        resolve_name_filter(node),
        resolve_parent_organization_filter(node),
      ]
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("organizations.name")
      base_query.where(clause, value)
    end

    def resolve_parent_organization_filter(node)
      return nil if node.parent_organization.nil?
      organization_ids = AdvancedSearches::Organization.new(query: node.parent_organization).results
      matching_ids = ::Organization
        .where(parent_id: organization_ids)
        .select(:id)
      base_query.where(id: matching_ids)
    end
  end
end
