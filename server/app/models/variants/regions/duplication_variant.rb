module Variants::Regions
  class DuplicationVariant < VariantAdapterBase
    def generate_iscn_name
      validate!
      cr = region.cytogenetic_regions.first
      "dup(#{cr.name})"
    end

    def validate
      if region.cytogenetic_regions.size == 1
        cr = region.cytogenetic_regions.first
        if cr.is_chromosome?
          variant.errors.add(:region, "Duplication cannot specify Chromosome-only bands. Use Disomy for Chromosome Y.")
        end
      else
        variant.errors.add(:region, "Duplication can only specify a single cytogenomic region")
      end
    end

    def default_variant_aliases
      [ "Gain" ]
    end
  end
end
