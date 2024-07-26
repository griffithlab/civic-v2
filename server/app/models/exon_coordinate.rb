class ExonCoordinate < ApplicationRecord
  belongs_to :variant, touch: true

  validates :coordinate_type, presence: true
  validates :coordinate_type, inclusion: {
    in: Constants::VALID_EXON_COORDINATE_TYPES,
    message: "%{value} is not a valid coordinate type"
  }

  enum reference_build: Constants::SUPPORTED_REFERENCE_BUILDS

  enum exon_offset_direction: {
    positive: 'positive',
    negative: 'negative'
  }

  enum strand: {
    positive: 'positive',
    negative: 'negative'
  }, _suffix: true

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
end
