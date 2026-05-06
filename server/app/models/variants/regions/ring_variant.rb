module Variants::Regions
  class RingVariant < VariantAdapterBase
    def generate_iscn_name
      validate!
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        "r(#{cr.chromosome})"
      else
        # TODO implement support for multiple
      end
    end

    def validate
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if !cr.is_chromosome?
          variant.errors.add(:region, "Ring must specify a whole Chromosome")
        end
      else
        # TODO implement support for multiple
      end
    end
  end
end
