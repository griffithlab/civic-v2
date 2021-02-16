require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::GenesSearch < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::GeneType.connection_type, null: false

  scope { Gene.eager_load(:gene_aliases, :assertions, variants: [evidence_items: [:drugs, :disease]]).where("evidence_items.status != 'rejected'").all }

  option(:entrez_symbol, type: String) { |scope, value| scope.where("genes.name ILIKE ?", "#{value}%") }
  option(:gene_alias, type: String)    { |scope, value| scope.where("gene_aliases.name ILIKE ?", "#{value}%") }
  option(:disease_name, type: String)  { |scope, value| scope.where("diseases.name ILIKE ?", "#{value}%") }
  option(:drug_name, type: String)     { |scope, value| scope.where("drugs.name ILIKE ?", "#{value}%") }

  option :sort_by, type: Types::GenesSortType do |scope, value|
    case value.column
    when "entrezSymbol"
      scope.order "genes.name #{value.direction}"
    when "drugName"
      scope.order "drugs.name #{value.direction}"
    when "geneAlias"
      scope.order "gene_aliases.name #{value.direction}"
    when "diseaseName"
      scope.order "diseases.name #{value.direction}"
    end
  end
end
