module Types::Entities
  class GeneType < Types::BaseObject
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject

    field :id, Int, null: false
    field :entrez_id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :official_name, String, null: false
    field :gene_aliases, [String], null: false
    field :sources, [Types::Entities::SourceType], null: false
    field :variants, resolver: Resolvers::Variants
    field :my_gene_info_details, GraphQL::Types::JSON, null: true

    def gene_aliases
      Loaders::AssociationLoader.for(Gene, :gene_aliases).load(object).then do |gene_aliases|
        gene_aliases.map{|a| a.name}.sort
      end
    end

    def sources
      Loaders::AssociationLoader.for(Gene, :sources).load(object)
    end

    def variants
      Loaders::AssociationLoader.for(Gene, :variants).load(object)
    end

    def my_gene_info_details
      MyGeneInfo.get_by_gene_id(object.id)
    end
  end
end
