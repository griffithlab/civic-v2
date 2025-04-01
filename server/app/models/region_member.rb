class RegionMember < ApplicationRecord
  belongs_to :region
  belongs_to :cytogenetic_region
end
