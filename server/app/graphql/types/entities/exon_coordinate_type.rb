module Types::Entities
  class ExonCoordinateType < Types::BaseObject
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::WithRevisions

    field :id, Int, null: false
    field :representative_transcript, String, null: true
    field :reference_build, Types::ReferenceBuildType, null: true
    field :ensembl_version, Int, null: true
    field :ensembl_id, String, null: true
    field :exon, Int, null: true
    field :exon_offset, Int, null: true
    field :exon_offset_direction, Types::Fusion::Direction, null: true
    field :chromosome, String, null: true
    field :strand, Types::Fusion::Direction, null: true
    field :start, Int, null: true
    field :stop, Int, null: true
    field :coordinate_type, Types::ExonCoordinateTypeType, null: false
  end
end
