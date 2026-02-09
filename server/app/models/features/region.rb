module Features
  class Region < ApplicationRecord
    include Subscribable
    include IsFeatureInstance

    # TODO order by rank
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
      Variants::RegionVariant
    end

    def valid_variant_names
      crs = self.cytogenetic_regions
      if crs.count == 1 # simple region
        cr = crs.first
        valid_variant_names = [ "Amplification" ]
        if cr.band.nil? # whole chromosome
          if cr.chromosome == "X"
            valid_variant_names.concat([ "Trisomy", "Monosomy", "Nullisomy", "Disomy", "Ring" ])
          elsif cr.chromosome == "Y"
            valid_variant_names.concat([ "Nullisomy", "Disomy", "Ring" ])
          else # not a sex chromosome
            valid_variant_names.concat([ "Trisomy", "Monosomy", "Nullisomy", "Tetrasomy", "Ring" ])
          end
        else # arm or band
          valid_variant_names.concat([ "Addition", "Deletion", "Homozygous Deletion", "Duplication", "Triplication" ])
        end
        return valid_variant_names.sort
      else # complex region
        # TODO add support
      end
    end
  end
end
