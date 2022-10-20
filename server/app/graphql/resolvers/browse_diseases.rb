require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseDiseases < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseDiseaseType.connection_type, null: false

  scope { DiseaseBrowseTableRow.all }

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

  option(:gene_names, type: String) do |scope, value|
    scope.where("array_to_string(gene_names, '|') ILIKE ?", "%#{value}%")
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
    when "GENE_COUNT"
      scope.order("gene_count #{value.direction}")
    end
  end

  def self.table_headers
    [
      'id',
      'name',
      'doid',
      'genes',
      'gene_count',
      'variant_count',
      'evidence_item_count',
      'assertion_count'
    ]
  end

  def self.to_row(object:)
    [
      object.id,
      object.display_name,
      object.doid,
      ArrayWrapper.wrap(object.gene_names),
      object.gene_count,
      object.variant_count,
      object.evidence_item_count,
      object.assertion_count
    ]
  end
end

