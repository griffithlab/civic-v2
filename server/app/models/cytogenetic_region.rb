class CytogeneticRegion < ApplicationRecord
  has_many :cytogenetic_coordinates
  has_many :region_members
end
