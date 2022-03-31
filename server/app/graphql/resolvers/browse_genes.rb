require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseGenes < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseGeneType.connection_type, null: false

  scope { GeneBrowseTableRow.all }

  option(:entrez_symbol, type: String) { |scope, value| scope.where("name ILIKE ?", "#{value}%") }
  option(:gene_alias, type: String)    { |scope, value| scope.where(array_query_for_column('alias_names'), "#{value}%") }
  option(:disease_name, type: String)  { |scope, value| scope.where(json_name_query_for_column('diseases'), "%#{value}%") }
  option(:drug_name, type: String)     { |scope, value| scope.where(json_name_query_for_column('drugs'), "%#{value}%") }

  option :sort_by, type: Types::BrowseTables::GenesSortType do |scope, value|
    case value.column
    when "entrezSymbol"
      scope.order "gene_browse_table_rows.name #{value.direction}"
    when "drugName"
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
    end
  end

  private
  def array_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "EXISTS (SELECT * FROM (SELECT unnest(#{col})) x(name) where name ILIKE ?)"
  end

  def json_name_query_for_column(col)
    raise 'Must supply a column name' if col.nil?
    "gene_browse_table_rows.id IN (select gb.id FROM gene_browse_table_rows gb, json_array_elements(gb.#{col}) d where d->>'name' ILIKE ?)"
  end
end
