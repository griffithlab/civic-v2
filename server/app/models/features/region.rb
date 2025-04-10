module Features
  class Region < ApplicationRecord
    include Subscribable
    include IsFeatureInstance

    #TODO order by rank
    has_many :region_members, -> () { order(:position) }
    has_many :cytogenetic_regions, through: :region_members
    has_many :cytogenetic_coordinates, through: :cytogenetic_regions

    def editable_fields
      [
        :description,
        :source_ids,
        :feature_alias_ids,
      ]
    end

    def compatible_variant_type
      #Variants::RegionVariant
    end
  end
end
