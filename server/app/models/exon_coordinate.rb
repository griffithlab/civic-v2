class ExonCoordinate < ApplicationRecord
  include Moderated
  include Subscribable

  belongs_to :variant, touch: true

  validates :coordinate_type, presence: true
  validates :coordinate_type, inclusion: {
    in: Constants::VALID_EXON_COORDINATE_TYPES,
    message: "%{value} is not a valid coordinate type"
  }

  validates :representative_transcript, format: {
    with: Constants::ENSEMBL_TRANSCRIPT_ID_FORMAT,
    message: "must be a valid, versioned, human, Ensembl transcript ID"
  }, allow_nil: true

  validates_with ExonCoordinateValidator

  enum reference_build: Constants::SUPPORTED_REFERENCE_BUILDS

  enum exon_offset_direction: {
    positive: 'positive',
    negative: 'negative'
  }

  enum strand: {
    positive: 'positive',
    negative: 'negative'
  }, _suffix: true

  enum record_state: {
    stub: 'stub',
    exons_provided: 'exons_provided',
    fully_curated: 'fully_curated'
  }

  def self.generate_stub(variant, coordinate_type)
    ExonCoordinate.create!(
      variant: variant,
      record_state: 'stub',
      coordinate_type: coordinate_type
    )
  end

  def name
    "#{variant.name} Coordinates"
  end

  def link
    variant.link
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

  def formatted_strand
    if strand.nil?
      ''
    elsif strand == 'positive'
      '1'
    elsif strand == 'negative'
      '-1'
    end
  end

  def editable_fields
    [
      :reference_build,
      :ensembl_version,
      :representative_transcript,
      :exon,
      :exon_offset,
      :exon_offset_direction,
    ]
  end

  def on_revision_accepted
    PopulateFusionCoordinates.perform_later(self.variant)
  end
end
