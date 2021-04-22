module Types::Entities
  class GeneType < Types::BaseObject
    #include Types::Revisions::WithRevisions <- TODO: we don't seem to be using this right now
    include Types::Flaggable::WithFlags

    field :id, Int, null: false
    field :entrez_id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :official_name, String, null: false
    field :aliases, [Types::Entities::GeneAliasType], null: true
    field :sources, [Types::Entities::SourceType], null: true
    field :variants, Types::Entities::VariantType.connection_type, null: true
    field :lifecycle_actions, Types::LifecycleType, null: false
    field :my_gene_info_details, GraphQL::Types::JSON, null: true
    field :revisions, Types::Revisions::RevisionType.connection_type, null: true
    field :comments, Types::Entities::CommentType.connection_type, null: true
    field :events, Types::Entities::EventType.connection_type, null: false

    def aliases
      Loaders::AssociationLoader.for(Gene, :gene_aliases).load(object)
    end

    def sources
      Loaders::AssociationLoader.for(Gene, :sources).load(object)
    end

    def variants
      Loaders::AssociationLoader.for(Gene, :variants).load(object)
    end

    def revisions
      Loaders::AssociationLoader.for(Gene, :revisions).load(object)
    end

    def comments
      Loaders::AssociationLoader.for(Gene, :comments).load(object)
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

    def events
      Loaders::AssociationLoader.for(Gene, :events).load(object)
    end

  end
end
