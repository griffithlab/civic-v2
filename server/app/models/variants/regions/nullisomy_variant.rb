module Variants::Regions
  class NullisomyVariant < VariantAdapterBase
    def generate_iscn_name
      validate!
      cr = variant.region.cytogenetic_regions.first
      if cr.name == "X"
        "-X OR -X,-X"
      elsif cr.name == "Y"
        "-Y"
      else
        "-#{cr.chromosome},-#{cr.chromosome}"
      end
    end

    def validate
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if !cr.is_chromosome?
          variant.errors.add(:region, "Nullisomy must specify a whole Chromosome")
        end
      else
        variant.errors.add(:region, "Nullisomy can only specify a single cytogenomic region")
      end
    end
  end
end
