module Variants::Regions
  class TriplicationVariant < VariantAdapterBase
    def generate_iscn_name
      cr = variant.region.cytogenetic_regions.first
      "tri(#{cr.name})"
    end

    def validate
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if cr.is_chromosome?
          variant.errors.add(:region, "Triplication cannot specify Chromosome-only bands. Did you mean Trisomy?")
        end
      else
        variant.errors.add(:region, "Triplication can only specify a single cytogenomic region")
      end
    end
  end
end
