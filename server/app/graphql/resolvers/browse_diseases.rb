require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseDiseases < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseDiseaseType.connection_type, null: false

  scope { MaterializedViews::DiseaseBrowseTableRow.all }

  option(:id, type: Int) do |scope, value|
    scope.where(id: value)
  end

  option(:name, type: String) do |scope, value|
    scope.where('name ILIKE ?', "%#{value}%")
  end

  option(:doid, type: String) do |scope, value|
    if value.upcase.starts_with?('DOID:')
      scope.where(doid: value.upcase.gsub('DOID:',''))
    else
      scope.where(doid: value)
    end
  end

  option(:feature_name, type: String) { |scope, value| scope.where(json_name_query_for_column('features'), "%#{value}%") }

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

  def json_name_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "disease_browse_table_rows.id IN (select d.id FROM disease_browse_table_rows d, json_array_elements(d.#{col}) dr where dr->>'name' ILIKE ?)"
  end
end

