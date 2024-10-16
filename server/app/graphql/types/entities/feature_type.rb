module Types::Entities
  class FeatureType < Types::BaseObject
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject
    implements Types::Interfaces::MolecularProfileComponent
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::WithRevisions

    description 'The Feature that a Variant can belong to'

    field :id, Int, null: false
    field :name, String, null: false
    field :full_name, String, null: true
    field :description, String, null: true
    field :feature_aliases, [String], null: false
    field :sources, [Types::Entities::SourceType], null: false
    field :variants, resolver: Resolvers::Variants
    field :link, String, null: false
    field :feature_instance, Types::FeatureInstanceType, null: false
    field :feature_type, Types::FeatureInstanceTypes, null: false
    field :deprecation_activity, Types::Activities::DeprecateFeatureActivityType, null: true
    field :deprecated, Boolean, null: false
    field :deprecation_reason, Types::FeatureDeprecationReasonType, null: true
    field :creation_activity, Types::Activities::CreateFeatureActivityType, null: true

    def id
      if object.class.name == 'Feature'
        object.id
      else
        object.feature.id
      end
    end

    def feature_aliases
      if object.class.name == 'Feature'
        to_load = object
      else
        to_load = object.feature
      end
      Loaders::AssociationLoader.for(Feature, :feature_aliases).load(to_load).then do |aliases|
        aliases.map{|a| a.name}.sort
      end
    end

    def sources
      if object.class.name == 'Feature'
        to_load = object
      else
        to_load = object.feature
      end
      Loaders::AssociationLoader.for(Feature, :sources).load(to_load)
    end

    def variants
      Loaders::AssociationLoader.for(Feature, :variants).load(object)
    end

    def link
      object.link
    end

    def feature_instance
      object.feature_instance
    end

    def feature_type
      object.feature_instance_type
    end
  end
end
