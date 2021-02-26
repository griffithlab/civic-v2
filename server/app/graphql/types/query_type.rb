module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :browseGenes, resolver: Resolvers::BrowseGenes
    field :gene, Types::Entities::GeneType, null: true do
      description "Find a gene by CIViC ID"
      argument :id, ID, required: true
    end

    def gene(id: )
      Gene.find(id)
    end
  end
end
