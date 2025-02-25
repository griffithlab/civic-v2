require "search_object/plugin/graphql"

class Resolvers::TopLevelFactors < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::FactorType.connection_type, null: false

  description "List and filter factors."

  scope do
    Features::Factor.joins(feature: { variants: [ :molecular_profiles ] })
      .where("variants.deprecated = 'f'")
      .order("features.name ASC")
      .select("factors.*, features.name")
      .distinct
  end

  option(:evidence_status_filter, default_value: "WITH_ACCEPTED_OR_SUBMITTED", type: Types::AssociatedEvidenceStatusFilterType, description: "Limit factors by the status of attached evidence.") do |scope, value|
    case value
    when "WITH_ACCEPTED"
      scope.joins(feature: { variants: { molecular_profiles: [ :evidence_items_by_status ] } })
        .where("evidence_items_by_statuses.accepted_count >= 1")
    when "WITH_ACCEPTED_OR_SUBMITTED"
      scope.joins(feature: { variants: { molecular_profiles: [ :evidence_items_by_status ] } })
        .where("evidence_items_by_statuses.accepted_count >= 1 OR evidence_items_by_statuses.submitted_count >= 1")
    when "WITH_SUBMITTED"
      scope.joins(feature: { variants: { molecular_profiles: [ :evidence_items_by_status ] } })
        .where("evidence_items_by_statuses.submitted_count >= 1")
    when "ALL"
      scope
    end
  end

  option(:ncit_it, type: [ GraphQL::Types::String ], description: "List of NCIt Codes to return Factors for") do |scope, value|
    scope.where("factors.ncit_id IN (?)", value.map(&:upcase))
  end

  option(:name, type: [ GraphQL::Types::String ], description: "List of Factor names to return") do |scope, value|
    names = value.map(&:upcase)
    scope.where("upper(features.name) IN (?) OR upper(features.full_name) IN (?)", names, names)
  end
end
