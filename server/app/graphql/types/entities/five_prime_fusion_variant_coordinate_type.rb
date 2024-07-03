module Types::Entities
  class FivePrimeFusionVariantCoordinateType < Types::Entities::FusionVariantCoordinateType
    field :end_exon, Int, null: true

    def end_exon
      object.exon_boundary
    end
  end
end
