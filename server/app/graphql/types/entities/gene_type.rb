module Types::Entities
  class GeneType < Types::BaseObject
    field :id, Int, null: false
    field :entrez_id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :official_name, String, null: false
    field :gene_aliases, [Types::Entities::GeneAliasType], null: true
    field :sources, [Types::Entities::SourceType], null: true
    field :variants, [Types::Entities::VariantType], null: true
    field :lifecycle_actions, Types::LifecycleType, null: false
    field :suggested_changes, [Types::SuggestedChanges::SuggestedChangeType], null: true

    def gene_aliases
      Loaders::AssociationLoader.for(Gene, :gene_aliases).load(object)
    end

    def sources
      Loaders::AssociationLoader.for(Gene, :sources).load(object)
    end

    def variants
      Loaders::AssociationLoader.for(Gene, :variants).load(object)
    end

    def suggested_changes
      Loaders::AssociationLoader.for(Gene, :v2_suggested_changes).load(object)
    end

    def lifecycle_actions
      {
        last_reviewed: object.last_review_event,
        last_modified: object.last_applied_change_event,
        #last_commented_on: object.last_comment_event,
      }
    end
  end
end
