require "search_object"
require "search_object/plugin/graphql"

class Resolvers::BrowseDiseases < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)
  include Resolvers::Shared::SearchHelpers

  type Types::BrowseTables::BrowseDiseaseType.connection_type, null: false

  scope { MaterializedViews::DiseaseBrowseTableRow.all }

  option(:id, type: Int) do |scope, value|
    scope.where(id: value)
  end

  option(:ids, type: [ Int ], description: "Filter by internal CIViC ids") do |scope, value|
    scope.where(id: value)
  end

  option(:name, type: String) do |scope, value|
    scope.where("name ILIKE ?", "%#{value}%")
  end

  option(:doid, type: String) do |scope, value|
    if value.upcase.starts_with?("DOID:")
      scope.where(doid: value.upcase.gsub("DOID:", ""))
    else
      scope.where(doid: value)
    end
  end

  option(:feature_name, type: String) do |scope, value|
    scope.where(json_name_query_for_column(scope.table_name, "features"), "%#{value}%")
  end

  option(:disease_alias, type: String) do |scope, value|
    scope.where(array_query_for_column("alias_names"), "%#{value}%")
  end

  option(:sort_by, type: Types::BrowseTables::DiseasesSortType) do |scope, value|
    case value.column
    when "NAME"
      scope.order("name #{value.direction}")
    when "DOID"
      scope.order("doid #{value.direction}")
    when "VARIANT_COUNT"
      scope.order("variant_count #{value.direction}")
    when "EVIDENCE_ITEM_COUNT"
      scope.order("evidence_item_count #{value.direction}")
    when "ASSERTION_COUNT"
      scope.order("assertion_count #{value.direction}")
    when "FEATURE_COUNT"
      scope.order("feature_count #{value.direction}")
    end
  end
end
