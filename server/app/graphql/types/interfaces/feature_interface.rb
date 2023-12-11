module Types::Interfaces
  module FeatureInterface
    include Types::BaseInterface

    description 'The Feature that a Variant can belong to'

    field :id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :feature_aliases, [String], null: false
    field :sources, [Types::Entities::SourceType], null: false
    field :variants, resolver: Resolvers::Variants
    field :link, String, null: false

    orphan_types(
      Types::Entities::GeneType
    )

    def id
      object.feature.id
    end

    def feature_aliases
      Loaders::AssociationLoader.for(Feature, :feature_aliases).load(object.feature).then do |aliases|
        aliases.map{|a| a.name}.sort
      end
    end

    def sources
      Loaders::AssociationLoader.for(Feature, :sources).load(object.feature)
    end

    def variants
      Loaders::AssociationLoader.for(Feature, :variants).load(object)
    end

    def link
      object.feature.link
    end

    definition_methods do
      def resolve_type(object, context)
        case object
        when Features::Gene
          Types::Entities::GeneType
        else
          raise "Unexpected Feature type #{object.class}"
        end
      end
    end
  end
end
