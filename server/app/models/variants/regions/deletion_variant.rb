module Variants::Regions
  class DeletionVariant < VariantAdapterBase
    def generate_iscn_name
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        "del(#{cr.name})"
      else
        raise StandardError.new("IMPLEMENT ME")
      end
    end

    def validate
      if cr.is_chromosome?
        variant.errors.add(:region, "Deletion cannot specify a whole Chromosome")
      end
      # no op
    end

    def default_variant_aliases
      [ "Loss" ]
    end
  end
end
