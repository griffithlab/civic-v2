module Types::Entities
  class ThreePrimeFusionVariantCoordinateType < Types::Entities::FusionVariantCoordinateType
    field :start_exon, Int, null: true

    def start_exon
      object.exon_boundary
    end
  end
end
