module Types::Entities
  class CytogeneticRegionType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :chromosome, String, null: false
    field :band, String, null: true
    field :cytogenetic_coordinates, [ Types::Entities::CytogeneticCoordinateType ], null: false

    def cytogenetic_coordinates
      Loaders::AssociationLoader.for(CytogeneticRegion, :cytogenetic_coordinates).load(object)
    end
  end
end
