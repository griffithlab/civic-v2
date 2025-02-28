module Types::Entities
  class VariantCoordinateType < Types::BaseObject
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::WithRevisions

    field :id, Int, null: false
    field :representative_transcript, String, null: true
    field :chromosome, String, null: true
    field :start, Int, null: true
    field :stop, Int, null: true
    field :reference_build, Types::ReferenceBuildType, null: true
    field :ensembl_version, Int, null: true
    field :reference_bases, String, null: true
    field :variant_bases, String, null: true
    field :coordinate_type, Types::VariantCoordinateTypeType, null: false
  end
end
