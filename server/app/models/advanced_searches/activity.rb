module AdvancedSearches
  class Activity < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::CreatedAt

    def base_query
      ::Activity.unscoped
    end

    def table_name
      "activities"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_created_at_filter(node),
        resolve_type_filter(node),
        resolve_user_filter(node),
        resolve_organization_filter(node),
      ]
    end

    def resolve_type_filter(node)
      return nil if node.type.nil?
      clause, value = node.type.resolve_query_for_type("activities.type")
      base_query.where(clause, value)
    end

    def resolve_user_filter(node)
      return nil if node.user.nil?
      user_ids = AdvancedSearches::User.new(query: node.user).results
      matching_ids = ::Activity.joins(:user)
        .where(users: { id: user_ids })
        .pluck(:id)
      base_query.where(id: matching_ids)
    end

    def resolve_organization_filter(node)
      return nil if node.organization.nil?
      organization_ids = AdvancedSearches::Organization.new(query: node.organization).results
      matching_ids = ::Activity.joins(:organization)
        .where(organizations: { id: organization_ids })
        .pluck(:id)
      base_query.where(id: matching_ids)
    end
  end
end
