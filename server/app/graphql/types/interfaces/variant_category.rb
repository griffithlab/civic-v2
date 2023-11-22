module Types::Interfaces
  module VariantCategory
    include Types::BaseInterface

    description 'The Gene, Region, or Factor that a Variant can belong to'


    field :id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :variant_category_aliases, [String], null: false
    field :sources, [Types::Entities::SourceType], null: false
    field :variants, resolver: Resolvers::Variants

    orphan_types(
      Types::VariantCategories::FactorType,
      Types::VariantCategories::GeneType
    )

    def id
      object.variant_category.id
    end

    def aliases
      Loaders::AssociationLoader.for(VariantCategory, :variant_category_aliases).load(object.variant_category).then do |aliases|
        aliases.map{|a| a.name}.sort
      end
    end

    def sources
      Loaders::AssociationLoader.for(VariantCategory, :sources).load(object)
    end

    def variants
      Loaders::AssociationLoader.for(VariantCategory, :variants).load(object)
    end

    definition_methods do
      def resolve_type(object, context)
        case object
        when VariantCategories::Factor
          Types::VariantCategories::FactorType
        when VariantCategories::Gene
          Types::VariantCategories::GeneType
        else
          raise "Unexpected Variant Category type #{object.class}"
        end
      end
    end
  end
end
