require 'search_object/plugin/graphql'

class Resolvers::TopLevelGenes < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::GeneType.connection_type, null: false

  description 'List and filter genes.'

  scope do
    Features::Gene.joins(feature: { variants: [molecular_profiles: [:evidence_items]]})
      .order('features.name ASC')
      .where("evidence_items.status != 'rejected'")
      .select("genes.*, features.name")
      .distinct
  end

  option(:entrez_symbols, type: [GraphQL::Types::String], description: 'List of Entrez Gene symbols to return results for') do |scope, value|
    scope.where('genes.name IN (?)', value.map(&:upcase))
  end

  option(:entrez_ids, type: [GraphQL::Types::Int], description: 'List of Entrez Gene IDs to return results for') do |scope, value|
    scope.where('genes.entrez_id IN (?)', value)
  end
end
