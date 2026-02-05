class RegionMember < ApplicationRecord
  belongs_to :region, class_name: "Features::Region"
  belongs_to :cytogenetic_region
end
