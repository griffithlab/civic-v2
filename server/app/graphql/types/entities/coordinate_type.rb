module Types::Entities
  class CoordinateType < Types::BaseObject
    field :representative_transcript, String, null: true
    field :chromosome, String, null: true
    field :start, Int, null: true
    field :stop, Int, null: true
  end
end
