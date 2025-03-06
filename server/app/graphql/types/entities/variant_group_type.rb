module Types::Entities
  class VariantGroupType < Types::BaseObject
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject

    field :id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :variants, resolver: Resolvers::Variants
    field :sources, [ Types::Entities::SourceType ], null: false

    def variants
      Loaders::AssociationLoader.for(VariantGroup, :variants).load(object)
    end
  end
end
