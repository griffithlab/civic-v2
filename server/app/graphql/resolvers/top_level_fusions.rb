require 'search_object/plugin/graphql'

class Resolvers::TopLevelFusions < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::FusionType.connection_type, null: false

  description 'List and filter fusions.'

  @@cols = Features::Fusion.column_names.map { |col| "fusions.#{col}" }.join(",")

  scope do
    Features::Fusion.joins(feature: { variants: [:molecular_profiles ]})
      .where("variants.deprecated = 'f'")
      .distinct
  end

  option(:gene_partner_id, type: Int, description: 'CIViC ID of one of the Gene partners') do |scope, value|
    scope.where('fusions.five_prime_gene_id = ? OR fusions.three_prime_gene_id = ?', value, value)
  end

  option(:entrez_symbols, type: [GraphQL::Types::String], description: 'List of Entrez Gene symbols to return results for') do |scope, value|
    scope.where('genes.name IN (?)', value.map(&:upcase))
  end

  option(:entrez_ids, type: [GraphQL::Types::Int], description: 'List of Entrez Gene IDs to return results for') do |scope, value|
    scope.where('genes.entrez_id IN (?)', value)
  end
end
