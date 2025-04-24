module Variants::Regions
  class AdditionVariant < VariantAdapterBase
    def generate_iscn_name
      validate!

      cr = variant.region.cytogenetic_regions.first
      if cr.is_chromosome?
        "add(#{cr.chromosome})"
      else
        "add(#{cr.name})"
      end
    end

    def validate
      if variant.region.cytogenetic_regions.size > 1
        variant.errors.add(:region, "Addition Region Variants can only have one cytogenetic region")
      end
    end
  end
end
