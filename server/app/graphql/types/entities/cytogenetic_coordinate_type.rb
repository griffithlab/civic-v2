module Types::Entities
  class CytogeneticCoordinateType < Types::BaseObject
    field :id, Int, null: false
    field :cytogenetic_region, Types::Entities::CytogeneticRegionType, null: false
    field :reference_build, Types::ReferenceBuildType, null: false
    field :chromosome, String, null: false
    field :start, Int, null: false
    field :stop, Int, null: false

    def cytogenetic_region
      Loaders::RecordLoader.for(CytogeneticRegion).load(object.cytogenetic_region_id)
    end
  end
end
