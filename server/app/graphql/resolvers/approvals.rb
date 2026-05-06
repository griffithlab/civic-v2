require "search_object"
require "search_object/plugin/graphql"

class Resolvers::Approvals < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::ApprovalType.connection_type, null: false

  description "List and filter approvals."

  scope do
    object.approvals
      .in_order_of(:status, [ "active", "requires_review", "revoked" ])
      .order("approvals.last_reviewed DESC")
  end

  option(:approving_user_id, type: Int, description: "CIViC User ID of the user approving the assertion.") do |scope, value|
    scope.where(user_id: value)
  end

  option(:approving_organization_id, type: Int, description: "CIViC Organization ID of the organization approving the assertion.") do |scope, value|
    scope.where(organization_id: value)
  end

  option(:approving_organization_is_approved_vcep, type: Boolean, description: "Limit to approvals from a FDA-approved ClinGen SC-VCEPs.") do |scope, value|
    scope.joins(:organization).where('organizations.is_approved_vcep': true)
  end

  option(:status, type: Types::ApprovalStatusType, description: "Limit to approvals of a particular status") do |scope, value|
    scope.where(status: value)
  end

  option(:sort_by, type: Types::DateSortType, description: "Sort order for the approvals. Defaults to most recent.") do |scope, value|
    scope.reorder("approvals.#{value.column} #{value.direction}")
  end
end
