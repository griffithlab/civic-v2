require "search_object"
require "search_object/plugin/graphql"

class Resolvers::BrowseVariantGroups < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseVariantGroupType.connection_type, null: false

  scope { MaterializedViews::VariantGroupBrowseTableRow.all }

  option(:ids, type: [ Int ], description: "Filter by internal CIViC ids") do |scope, value|
    scope.where(id: value)
  end

  option(:name, type: String) do |scope, value|
    scope.where("name ILIKE ?", "%#{value}%")
  end

  option(:feature_names, type: String) do |scope, value|
    scope.where("array_to_string(feature_names, '|') ILIKE ?", "%#{value}%")
  end

  option(:variant_names, type: String) do |scope, value|
    scope.where("array_to_string(variant_names, '|') ILIKE ?", "%#{value}%")
  end

  option(:sort_by, type: Types::BrowseTables::VariantGroupsSortType) do |scope, value|
    case value.column
    when "NAME"
      scope.order("name #{value.direction}")
    when "VARIANT_COUNT"
      scope.order("variant_count #{value.direction}")
    when "EVIDENCE_ITEM_COUNT"
      scope.order("evidence_item_count #{value.direction}")
    when "GENE_NAMES"
      scope.order("gene_names #{value.direction}")
    when "VARIANT_NAMES"
      scope.order("variant_names #{value.direction}")
    end
  end
end
