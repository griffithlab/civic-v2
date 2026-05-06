module Variants::Regions
  class TrisomyVariant < VariantAdapterBase
    def generate_iscn_name
      validate!
      cr = variant.region.cytogenetic_regions.first
      "+#{cr.chromosome}"
    end

    def validate
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if !cr.is_chromosome?
          variant.errors.add(:region, "Trisomy must specify a whole Chromosome")
        end
        if cr.name == "Y"
          variant.errors.add(:region, "Trisomy of Y chromosome is not supported.")
        end
      else
        variant.errors.add(:region, "Trisomy can only specify a single cytogenomic region")
      end
    end
  end
end
