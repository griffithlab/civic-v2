module Variants::Regions
  class DuplicationVariant
    def self.generate_iscn_name(variant)
      if region.cytogenetic_regions.size == 1
        cr = region.cytogenetic_regions.first
        if cr.is_chromosome?
          raise StandardError.new("Duplication cannot specify Chromosome-only bands")
        else
          "dup(#{cr.name})"
        end
      else
        raise StandardError.new("Duplication can only specify a single cytogenomic region")
      end
    end

    def self.validate(variant)
      if region.cytogenetic_regions.size == 1
        cr = region.cytogenetic_regions.first
        if cr.is_chromosome?
          variant.errors.add(:region, "Duplication cannot specify Chromosome-only bands")
        end
      else
        variant.errors.add(:region, "Duplication can only specify a single cytogenomic region")
      end
    end
  end
end
