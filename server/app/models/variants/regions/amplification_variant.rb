module Variants::Regions
  class AmplificationVariant < VariantAdapterBase
    def generate_iscn_name
      validate!

      cr = variant.region.cytogenetic_regions.first
      if cr.is_chromosome?
        "amp(#{cr.chromosome})"
      else
        "amp(#{cr.name})"
      end
    end

    def validate
      if variant.region.cytogenetic_regions.size != 1
        variant.errors.add(:region, "Amplification can only specify a single cytogenetic region")
      end
    end
  end
end
