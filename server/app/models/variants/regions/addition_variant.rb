module Variants::Regions
  class AdditionVariant
    def self.generate_iscn_name(variant)
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if cr.is_chromosome?
          "add(#{cr.chromosome})"
        else
          "add(#{cr.name})"
        end
      else
        raise StandardError.new("Addition Region Variants can only have one cytogenetic region")
      end
    end

    def self.validate(variant)
      if variant.region.cytogenetic_regions.size > 1
        variant.errors.add(:region, "Addition Region Variants can only have one cytogenetic region")
      end
    end
  end
end
