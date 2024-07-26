class VariantCoordinate < ApplicationRecord
  include Moderated

  belongs_to :variant, touch: true

  enum reference_build: Constants::SUPPORTED_REFERENCE_BUILDS

  validates :reference_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /"
  }, allow_nil: true

  validates :variant_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /"
  }, allow_nil: true

  validates :coordinate_type, presence: true
  validates :coordinate_type, inclusion: {
    in: Constants::VALID_VARIANT_COORDINATE_TYPES,
    message: "%{value} is not a valid coordinate type"
  }

  validates_with VariantCoordinateValidator

  def editable_fields
    [
      :reference_build,
      :ensembl_version,
      :chromosome,
      :start,
      :stop,
      :reference_bases,
      :variant_bases,
      :representative_transcript,
    ]
  end
end
