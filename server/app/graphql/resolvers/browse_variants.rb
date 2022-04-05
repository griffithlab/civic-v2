require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseVariants < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseVariantType.connection_type, null: false

  scope { VariantBrowseTableRow.all }

  option(:variant_name, type: String)  { |scope, value| scope.where("name ILIKE ?", "#{value}%") }
  option(:entrez_symbol, type: String) { |scope, value| scope.where("gene_name ILIKE ?", "#{value}%") }
  option(:variant_type_id, type: Int)    { |scope, value| scope.where(int_array_query_for_column('variant_types'), value) }
  option(:disease_name, type: String)  { |scope, value| scope.where(json_name_query_for_column('diseases'), "%#{value}%") }
  option(:drug_name, type: String)     { |scope, value| scope.where(json_name_query_for_column('drugs'), "%#{value}%") }
  option(:variant_alias, type: String) { |scope, value| scope.where(array_query_for_column('alias_names'), "%#{value}%") }
  option(:variant_group_id, type: Int) do |scope, value| 
    scope.where(id: Variant.joins(:variant_groups).where('variant_groups.id = ?', value).distinct)
  end


  option :sort_by, type: Types::BrowseTables::VariantsSortType do |scope, value|
    case value.column
    when "variantName"
      scope.order "name #{value.direction}"
    when "entrezSymbol"
      scope.order "gene_name #{value.direction}"
    when "drugName"
      scope.order "drug_names #{value.direction}"
    when "diseaseName"
      scope.order "disease_names #{value.direction}"
    when "evidenceItemCount"
      scope.order "evidence_item_count #{value.direction}"
    when "assertionCount"
      scope.order "assertion_count #{value.direction}"
    when "evidenceScore"
      scope.order "evidence_score #{value.direction}"
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
