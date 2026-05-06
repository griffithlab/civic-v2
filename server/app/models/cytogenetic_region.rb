class CytogeneticRegion < ApplicationRecord
  has_many :cytogenetic_coordinates
  has_many :region_members
  has_many :regions, through: :region_members

  def is_chromosome?
    band.blank?
  end
end
