require "search_object/plugin/graphql"

class Resolvers::TopLevelRegions < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::RegionType.connection_type, null: false

  description "List and filter regions."

  scope do
    Features::Region.joins(feature: { variants: [ :molecular_profiles ] })
      .where("variants.deprecated = 'f'")
      .order("features.name ASC")
      .select("regions.*, features.name")
      .distinct
  end

  option(:ids, type: [ Int ], description: "Filter by internal CIViC ids") do |scope, value|
    scope.where(id: value)
  end

  option(:evidence_status_filter, default_value: "WITH_ACCEPTED_OR_SUBMITTED", type: Types::AssociatedEvidenceStatusFilterType, description: "Limit regions by the status of attached evidence.") do |scope, value|
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

  option(:iscn_name, type: [ GraphQL::Types::String ], description: "List of ISCN names to return Regions for") do |scope, value|
    scope.where("regions.iscn_name IN (?)", value.map(&:upcase))
  end

  option(:name, type: [ GraphQL::Types::String ], description: "List of Region names to return") do |scope, value|
    names = value.map(&:upcase)
    scope.where("upper(features.name) IN (?)", names)
  end
end
