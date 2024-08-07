require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseFeatures < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseFeatureType.connection_type, null: false

  scope { MaterializedViews::FeatureBrowseTableRow.all }

  option(:feature_name, type: String) { |scope, value| scope.where("name ILIKE ?", "#{value}%") }
  option(:feature_full_name, type: String) { |scope, value| scope.where("full_name ILIKE ?", "#{value}%") }
  option(:feature_alias, type: String)    { |scope, value| scope.where(array_query_for_column('alias_names'), "#{value}%") }
  option(:disease_name, type: String)  { |scope, value| scope.where(json_name_query_for_column('diseases'), "%#{value}%") }
  option(:therapy_name, type: String)     { |scope, value| scope.where(json_name_query_for_column('therapies'), "%#{value}%") }
  option(:feature_type, type: Types::FeatureInstanceTypes) do |scope, value|
    if value
      scope.where(feature_instance_type: value)
    else
      scope
    end
  end

  option :sort_by, type: Types::BrowseTables::FeaturesSortType do |scope, value|
    case value.column
    when "featureName"
      scope.order "feature_browse_table_rows.name #{value.direction}"
    when "featureFullName"
      scope.order "feature_browse_table_rows.full_name #{value.direction}"
    when "therapyName"
      scope.order "drug_names #{value.direction}"
    when "geneAlias"
      scope.order "alias_names #{value.direction}"
    when "diseaseName"
      scope.order "disease_names #{value.direction}"
    when "variantCount"
      scope.order "variant_count #{value.direction}"
    when "evidenceItemCount"
      scope.order "evidence_item_count #{value.direction}"
    when "assertionCount"
      scope.order "assertion_count #{value.direction}"
    when "molecularProfileCount"
      scope.order "molecular_profile_count #{value.direction}"
    end
  end

  private
  def array_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "EXISTS (SELECT * FROM (SELECT unnest(#{col})) x(name) where name ILIKE ?)"
  end

  def json_name_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "feature_browse_table_rows.id IN (select fb.id FROM feature_browse_table_rows fb, json_array_elements(fb.#{col}) d where d->>'name' ILIKE ?)"
  end
end
