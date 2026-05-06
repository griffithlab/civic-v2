module Types::Entities
  class RegionType < Types::Entities::FeatureType
    field :variants, resolver: Resolvers::RegionVariants

    field :cytogenetic_regions, [ Types::Entities::CytogeneticRegionType ]

    def cytogenetic_regions
      Loaders::AssociationLoader.for(Features::Region, :cytogenetic_regions).load(object)
    end
  end
end
