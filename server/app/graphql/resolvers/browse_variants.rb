require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseVariants < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseVariantType.connection_type, null: false

  scope { MaterializedViews::VariantBrowseTableRow.all }

  option(:variant_name, type: String)  { |scope, value| scope.where("name ILIKE ?", "%#{value}%") }
  option(:feature_name, type: String) { |scope, value| scope.where("feature_name ILIKE ?", "#{value}%") }
  option(:variant_type_id, type: Int)  { |scope, value| scope.where(int_array_query_for_column('variant_type_ids'), value) }
  option(:disease_name, type: String)  { |scope, value| scope.where(json_name_query_for_column('diseases'), "%#{value}%") }
  option(:therapy_name, type: String)  { |scope, value| scope.where(json_name_query_for_column('therapies'), "%#{value}%") }
  option(:variant_alias, type: String) { |scope, value| scope.where(array_query_for_column('alias_names'), "%#{value}%") }
  option(:variant_group_id, type: Int) do |scope, value| 
    scope.where(id: Variant.joins(:variant_groups).where('variant_groups.id = ?', value).distinct)
  end
  option(:variant_type_name, type: String) { |scope, value| scope.where(json_name_query_for_column('variant_types'), "%#{value}%") }
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

  private
  def array_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "EXISTS (SELECT * FROM (SELECT unnest(#{col})) x(name) where name ILIKE ?)"
  end

  def int_array_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "EXISTS (SELECT * FROM (SELECT unnest(#{col})) x(id) where id = ?)"
  end

  def json_name_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "variant_browse_table_rows.id IN (select vb.id FROM variant_browse_table_rows vb, json_array_elements(vb.#{col}) d where d->>'name' ILIKE ?)"
  end
end
