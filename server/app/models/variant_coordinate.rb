class VariantCoordinate < ApplicationRecord
  include Moderated

  belongs_to :variant, touch: true

  enum reference_build: [:GRCh38, :GRCh37, :NCBI36]

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
    in: Constants::VALID_COORDINATE_TYPES,
    message: "%{value} is not a valid coordinate type"
  }

  enum exon_offset_direction: {
    positive: 'positive',
    negative: 'negative'
  }

  validates_with CoordinateValidator

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

  def formatted_offset
    if exon_offset_direction.nil?
      ''
    elsif exon_offset_direction == 'positive'
      '+'
    elsif exon_offset_direction == 'negative'
      '-'
    end
  end

end
