module Variants::Regions
  class DeletionVariant < VariantAdapterBase
    def generate_iscn_name
      if variant.region.cytogenetic_regions.size == 1
        cr = variant.region.cytogenetic_regions.first
        if cr.is_chromosome?
          "del(#{cr.chromosome})"
        else
          "del(#{cr.name})"
        end
      else
        raise StandardError.new("IMPLEMENT ME")
      end
    end

    def validate
      # no op
    end
  end
end
