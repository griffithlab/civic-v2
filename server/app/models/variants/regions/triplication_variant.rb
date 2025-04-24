module Variants::Regions
  class TriplicationVariant
    def self.generate_iscn_name(variant)
      if region.cytogenetic_regions.size == 1
        cr = region.cytogenetic_regions.first
        if cr.is_chromosome?
          raise StandardError.new("Triplication cannot specify Chromosome-only bands")
        else
          "trip(#{cr.name})"
        end
      else
        raise StandardError.new("Triplication can only specify a single cytogenomic region")
      end
    end

    def self.validate(variant)
      if region.cytogenetic_regions.size == 1
        cr = region.cytogenetic_regions.first
        if cr.is_chromosome?
          variant.errors.add(:region, "Triplication cannot specify Chromosome-only bands")
        end
      else
        variant.errors.add(:region, "Triplication can only specify a single cytogenomic region")
      end
    end
  end
end
