module Variants::Regions
  class MonosomyVariant < VariantAdapterBase
    def generate_iscn_name
      validate!
      cr = variant.region.cytogenetic_regions.first
      "-#{cr.chromsome}"
    end

    def validate
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if !cr.is_chromosome?
          variant.errors.add(:region, "Monosomy must specify a whole Chromosome")
        end
        if cr.name == "chrY"
          variant.errors.add(:region, "Monosomy of Y chromosome is not valid.")
        end
      else
        variant.errors.add(:region, "Monosomy can only specify a single cytogenomic region")
      end
    end
  end
end
