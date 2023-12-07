module Types::Entities
  class GeneType < Types::BaseObject
    implements Types::Interfaces::FeatureInterface

    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::MolecularProfileComponent

    field :entrez_id, Int, null: false
    field :official_name, String, null: false
    field :my_gene_info_details, GraphQL::Types::JSON, null: true

    def my_gene_info_details
      MyGeneInfo.get_by_gene_id(object.id)
    end
  end
end
