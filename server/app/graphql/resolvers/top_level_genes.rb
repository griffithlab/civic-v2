require 'search_object/plugin/graphql'

class Resolvers::TopLevelGenes < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::GeneType.connection_type, null: false

  description 'List and filter genes.'

  scope { Gene.joins(variants: [:evidence_items]).order('genes.name ASC').where("evidence_items.status != 'rejected'").distinct }
end
