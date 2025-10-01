require "search_object"
require "search_object/plugin/graphql"

class Resolvers::BrowseVariants < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)
  include Resolvers::Shared::SearchHelpers

  type Types::BrowseTables::BrowseVariantType.connection_type, null: false

  scope { MaterializedViews::VariantBrowseTableRow.all }

  option(:ids, type: [ Int ], description: "Filter by internal CIViC ids") do |scope, value|
    scope.where(id: value)
  end

  option(:variant_name, type: String)  { |scope, value| scope.where("name ILIKE ?", "%#{value}%") }
  option(:feature_name, type: String) { |scope, value| scope.where("feature_name ILIKE ?", "#{value}%") }
  option(:variant_type_id, type: Int)  { |scope, value| scope.where(int_array_query_for_column("variant_type_ids"), value) }

  option(:disease_name, type: String)  do |scope, value|
    scope.where(json_name_query_for_column(scope.table_name, "diseases"), "%#{value}%")
  end

  option(:therapy_name, type: String)  do |scope, value|
    scope.where(json_name_query_for_column(scope.table_name, "therapies"), "%#{value}%")
  end

  option(:variant_alias, type: String) { |scope, value| scope.where(array_query_for_column("alias_names"), "%#{value}%") }
  option(:variant_group_id, type: Int) do |scope, value|
    scope.where(id: Variant.joins(:variant_groups).where("variant_groups.id = ?", value).distinct)
  end
  option(:variant_type_name, type: String) { |scope, value| scope.where(json_name_query_for_column("variant_types"), "%#{value}%") }
  option(:has_no_variant_type, type: Boolean) do |scope, value|
    if value
      scope.where(variant_type_count: 0)
    else
      scope
    end
  end

  option(:category, type: Types::VariantCategories) do |scope, value|
    if value
      scope.where(category: value)
    else
      scope
    end
  end

  option :sort_by, type: Types::BrowseTables::VariantsSortType do |scope, value|
    case value.column
    when "variantName"
      scope.reorder "name #{value.direction}"
    when "featureName"
      scope.reorder "feature_name #{value.direction}"
    when "therapyName"
      scope.reorder "drug_names #{value.direction}"
    when "diseaseName"
      scope.reorder "disease_names #{value.direction}"
    end
  end
end
