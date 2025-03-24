require "search_object"
require "search_object/plugin/graphql"

class Resolvers::Endorsements < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::EndorsementType.connection_type, null: false

  description "List and filter endorsements."

  scope do
    object.endorsements
      .in_order_of(:status, [ "active", "requires_review", "revoked" ])
      .order("endorsements.last_reviewed DESC")
  end

  option(:endorsing_user_id, type: Int, description: "CIViC User ID of the user endorsing the assertion.") do |scope, value|
    scope.where(user_id: value)
  end

  option(:endorsing_organization_id, type: Int, description: "CIViC Organization ID of the organization endorsing the assertion.") do |scope, value|
    scope.where(organization_id: value)
  end

  option(:endorsing_organization_is_approved_vcep, type: Boolean, description: "Limit to endorsements from a FDA-approved ClinGen SC-VCEPs.") do |scope, value|
    scope.joins(:organization).where('organizations.is_approved_vcep': true)
  end

  option(:status, type: Types::EndorsementStatusType, description: "Limit to endorsements of a particular status") do |scope, value|
    scope.where(status: value)
  end

  option(:sort_by, type: Types::DateSortType, description: "Sort order for the endorsements. Defaults to most recent.") do |scope, value|
    scope.reorder("endorsements.#{value.column} #{value.direction}")
  end
end
