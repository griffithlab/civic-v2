module Variants::Regions
  class AdditionVariant < VariantAdapterBase
    def generate_iscn_name
      validate!

      cr = variant.region.cytogenetic_regions.first
      "add(#{cr.name})"
    end

    def validate
      if cr.is_chromosome?
        variant.errors.add(:region, "Addition cannot specify a whole Chromosome")
      end
      if variant.region.cytogenetic_regions.size > 1
        variant.errors.add(:region, "Addition Region Variants can only have one cytogenetic region")
      end
    end
  end
end
