class VariantCoordinate < ApplicationRecord
  include Moderated
  include Subscribable

  belongs_to :variant, touch: true

  enum :reference_build, Constants::SUPPORTED_REFERENCE_BUILDS

  enum :record_state, {
    stub: "stub",
    fully_curated: "fully_curated",
  }

  validates :reference_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /",
  }, allow_nil: true

  validates :variant_bases, format: {
    with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
    message: "only allows A,C,T,G or /",
  }, allow_nil: true

  validates :representative_transcript, format: {
    with: Constants::ENSEMBL_TRANSCRIPT_ID_FORMAT,
    message: "must be a valid, versioned, human, Ensembl transcript ID",
  }, allow_nil: true

  validates :coordinate_type, presence: true
  validates :coordinate_type, inclusion: {
    in: Constants::VALID_VARIANT_COORDINATE_TYPES,
    message: "%{value} is not a valid coordinate type",
  }

  validates_with VariantCoordinateValidator

  def self.generate_stub(variant, coordinate_type)
    VariantCoordinate.create!(
      variant: variant,
      record_state: "stub",
      coordinate_type: coordinate_type
    )
  end

  def name
    "#{variant.name} Coordinates"
  end

  def link
    variant.link
  end

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

  def on_revision_accepted
    SetAlleleRegistryIdSingleVariant.perform_later(self.variant) if Rails.env.production?
  end
end
