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

    def gene_aliases
      Loaders::RecordLoader.for(GeneAlias).load_many(object.gene_alias_ids)
    end

    def sources
      Loaders::RecordLoader.for(Source).load_many(object.source_ids)
    end

    def variants
      Loaders::RecordLoader.for(Variant).load_many(object.variant_ids)
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
