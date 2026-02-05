class CytogeneticCoordinate < ApplicationRecord
  belongs_to :cytogenetic_region

  enum :reference_build, Constants::SUPPORTED_REFERENCE_BUILDS
end
