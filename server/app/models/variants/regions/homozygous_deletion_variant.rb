module Variants::Regions
  class HomozygousDeletionVariant
    def self.generate_iscn_name(variant)
      if region.cytogenetic_regions.size == 1
        cr = region.cytogenetic_regions.first
        if cr.is_chromosome?
          raise StandardError.new("Homozyguous Deletion cannot specify Chromosome only bands")
        else
          "del(#{cr.name}),del(#{cr.name})"
        end
      else
        raise StandardError.new("Homozyguous Deletion can only specify a single cytogenomic region")
      end
    end

    def self.validate(variant)
      if region.cytogenetic_regions.size == 1
        cr = region.cytogenetic_regions.first
        if cr.is_chromosome?
          variant.errors.add(:region, "Homozyguous Deletion cannot specify Chromosome only bands")
        end
      else
        variant.errors.add(:region, "Homozyguous Deletion can only specify a single cytogenomic region")
      end
    end
  end
end
