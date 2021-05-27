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
    field :aliases, [Types::Entities::GeneAliasType], null: false
    field :sources, [Types::Entities::SourceType], null: false
    field :variants, Types::Entities::VariantType.connection_type, null: false
    field :lifecycle_actions, Types::LifecycleType, null: false
    field :my_gene_info_details, GraphQL::Types::JSON, null: true

    def aliases
      Loaders::AssociationLoader.for(Gene, :gene_aliases).load(object)
    end

    def sources
      Loaders::AssociationLoader.for(Gene, :sources).load(object)
    end

    def variants
      Loaders::AssociationLoader.for(Gene, :variants).load(object)
    end

    def lifecycle_actions
      {
        last_reviewed: object.last_review_event,
        last_modified: object.last_accepted_revision_event,
        #last_commented_on: object.last_comment_event,
      }
    end

    def my_gene_info_details
      MyGeneInfo.get_by_gene_id(object.id)
    end
  end
end
