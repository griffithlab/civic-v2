module Variants::Regions
  class CnlohVariant < VariantAdapterBase
    def generate_iscn_name
      validate!

      cr = variant.region.cytogenetic_regions.first
      "(#{cr.name})x2 hmz"
    end

    def validate
      if variant.region.cytogenetic_regions.size > 1
        variant.errors.add(:region, "cnLOH Region Variants can only have one cytogenetic region")
      end
    end

    def default_variant_aliases
      [ "Copy Neutral Loss of Heterozygosity" ]
    end
  end
end
