module Variants::Regions
  class DisomyVariant < VariantAdapterBase
    def generate_iscn_name
      validate!
      cr = variant.region.cytogenetic_regions.first
      "+#{cr.chromsome}"
    end

    def validate
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if !cr.is_chromosome?
          variant.errors.add(:region, "Disomy must specify a whole Chromosome")
        end
        if cr.name != "chrY" && cr.name != "chrX"
          variant.errors.add(:region, "Disomy must specify a sex chromosome")
        end
      else
        variant.errors.add(:region, "Disomy can only specify a single cytogenomic region")
      end
    end
  end
end
