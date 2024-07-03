module Types::Entities
  class FusionVariantCoordinateType < Types::BaseObject
    field :id, Int, null: false
    field :representative_transcript, String, null: true
    field :reference_build, Types::ReferenceBuildType, null: true
    field :ensembl_version, Int, null: true
    field :exon_offset, Int, null: true
    field :exon_boundary, Int, null: true
    field :chromosome, String, null: true
    field :start, Int, null: true
    field :stop, Int, null: true
  end
end
