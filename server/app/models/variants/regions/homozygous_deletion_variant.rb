module Variants::Regions
  class HomozygousDeletionVariant < VariantAdapterBase
    def generate_iscn_name
      validate!
      cr = variant.region.cytogenetic_regions.first
      "del(#{cr.name}),del(#{cr.name})"
    end

    def validate
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if cr.is_chromosome?
          variant.errors.add(:region, "Homozyguous Deletion cannot specify Chromosome only bands. Did you mean Nullisomy?")
        end
      else
        variant.errors.add(:region, "Homozyguous Deletion can only specify a single cytogenomic region")
      end
    end
  end
end
