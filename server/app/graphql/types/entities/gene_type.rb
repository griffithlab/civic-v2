module Types::Entities
  class GeneType < Types::Entities::FeatureType
    field :entrez_id, Int, null: false
    field :my_gene_info_details, GraphQL::Types::JSON, null: true
    field :variants, resolver: Resolvers::GeneVariants

    def my_gene_info_details
      MyGeneInfo.get_by_gene_id(object.id)
    end
  end
end
