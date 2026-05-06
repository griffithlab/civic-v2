module AdvancedSearches
  class Revision < AdvancedSearches::Base
    include AdvancedSearches::Shared::CreatedAt
    include AdvancedSearches::Shared::Activities

    def base_query
      ::Revision
    end

    def table_name
      "revisions"
    end

    def resolve_search_fields(node)
      [
        resolve_subject_type_filter(node),
        resolve_subject_id_filter(node),
        resolve_created_at_filter(node),
        resolve_status_filter(node),
        resolve_field_name_filter(node),
        resolve_activity_user(node.creating_user, "SuggestRevisionSetActivity"),
        resolve_activity_user(node.moderating_user, [ "AcceptRevisionsActivity",  "RejectRevisionsActivity" ]),
      ]
    end

    def resolve_subject_type_filter(node)
      return nil if node.subject_type.nil?
      clause, value = node.subject_type.resolve_query_for_type("revisions.subject_type")
      base_query.where(clause, value)
    end

    def resolve_subject_id_filter(node)
      return nil if node.subject_id.nil?
      clause, value = node.subject_id.resolve_query_for_type("revisions.subject_type")
      base_query.where(clause, value)
    end

    def resolve_status_filter(node)
      return nil if node.status.nil?
      clause, value = node.status.resolve_query_for_type("revisions.status")
      base_query.where(clause, value)
    end

    def resolve_field_name_filter(node)
      return nil if node.field_name.nil?
      clause, value = node.field_name.resolve_query_for_type("revisions.field_name")
      base_query.where(clause, value)
    end
  end
end
