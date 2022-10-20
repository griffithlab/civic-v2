require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseMolecularProfiles < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)


  type Types::BrowseTables::BrowseMolecularProfileType.connection_type, null: false

  scope do
    MolecularProfileBrowseTableRow
      .all
      .order('evidence_score DESC')
  end

  option(:variant_name, type: String)  { |scope, value| scope.where(json_name_query_for_column('variants'), "#{value}%") }
  option(:entrez_symbol, type: String)  { |scope, value| scope.where(json_name_query_for_column('genes'), "#{value}%") }
  option(:disease_name, type: String)  { |scope, value| scope.where(json_name_query_for_column('diseases'), "%#{value}%") }
  option(:drug_name, type: String)     { |scope, value| scope.where(json_name_query_for_column('drugs'), "%#{value}%") }
  option(:molecular_profile_alias, type: String) { |scope, value| scope.where(array_query_for_column('alias_names'), "%#{value}%") }
  option(:variant_id, type: Int) do |scope, value| 
    scope.where(id: MolecularProfile.joins(:variants).where(variants: { id: value }).select('molecular_profiles.id')) 
  end

  option :sort_by, type: Types::BrowseTables::MolecularProfilesSortType do |scope, value|
    case value.column
    when "evidenceItemCount"
      scope.reorder "evidence_item_count #{value.direction}"
    when "assertionCount"
      scope.reorder "assertion_count #{value.direction}"
    when "evidenceScore"
      scope.reorder "evidence_score #{value.direction}"
    end
  end

  def json_name_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "molecular_profile_browse_table_rows.id IN (select mp.id FROM molecular_profile_browse_table_rows mp, json_array_elements(mp.#{col}) d where d->>'name' ILIKE ?)"
  end

  def array_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "EXISTS (SELECT * FROM (SELECT unnest(#{col})) x(name) where name ILIKE ?)"
  end

  def self.table_headers
    [
      'id',
      'name',
      'aliases',
      'genes',
      'variants',
      'diseases',
      'drugs',
      'evidence_score',
      'evidence_count',
      'assertion_count'
    ]
  end

  def self.to_row(object:)
    [
      object.id,
      object.display_name,
      ArrayWrapper.wrap(object.alias_names.compact),
      ArrayWrapper.wrap(object.genes, field_name: 'name'),
      ArrayWrapper.wrap(object.variants, field_name: 'name'),
      ArrayWrapper.wrap(object.diseases, field_name: 'name'),
      ArrayWrapper.wrap(object.drugs, field_name: 'name'),
      object.evidence_score,
      object.evidence_item_count,
      object.assertion_count
    ]
  end
end
