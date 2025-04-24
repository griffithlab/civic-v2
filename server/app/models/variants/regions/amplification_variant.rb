module Variants::Regions
  class AmplificationVariant
    def self.generate_iscn_name(variant)
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if cr.is_chromosome?
          "amp(#{cr.chromosome})"
        else
          "amp(#{cr.name})"
        end
      else
        raise StandardError.new("Amplification can only specify a single cytogenetic region")
      end
    end

    def self.validate(variant)
      if variant.region.cytogenetic_regions.size != 1
        variant.errors.add(:region, "Amplification can only specify a single cytogenetic region")
      end
    end
  end
end
