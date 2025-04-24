module Variants::Regions
  class TrisomyVariant
    def self.generate_iscn_name(variant)
      if region.cytogenetic_regions.size == 1
        cr = region.cytogenetic_regions.first
        if !cr.is_chromosome?
          raise StandardError.new("Trisomy must specify a whole Chromosome")
        else
          "+#{cr.chromsome}"
        end
      else
        raise StandardError.new("Trisomy can only specify a single cytogenomic region")
      end
    end

    def self.validate(variant)
      if region.cytogenetic_regions.size == 1
        cr = region.cytogenetic_regions.first
        if !cr.is_chromosome?
          variant.errors.add(:region, "Trisomy must specify a whole Chromosome")
        end
      else
        variant.errors.add(:region, "Trisomy can only specify a single cytogenomic region")
      end
    end
  end
end
