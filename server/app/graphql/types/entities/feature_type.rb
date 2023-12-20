module Types::Entities
  class FeatureType < Types::BaseObject
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::MolecularProfileComponent
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::WithRevisions

    description 'The Feature that a Variant can belong to'

    field :id, Int, null: false
    field :name, String, null: false
    field :full_name, String, null: true
    field :description, String, null: false
    field :feature_aliases, [String], null: false
    field :sources, [Types::Entities::SourceType], null: false
    field :variants, resolver: Resolvers::Variants
    field :link, String, null: false
    field :feature_instance, Types::FeatureInstanceType, null: false

    def id
      object.id
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

    #definition_methods do
    #  def resolve_type(object, context)
    #    case object
    #    when Features::Gene
    #      Types::Entities::GeneType
    #    else
    #      raise "Unexpected Feature type #{object.class}"
    #    end
    #  end
    #end
  end
end
