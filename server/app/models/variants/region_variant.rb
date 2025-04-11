module Variants
  class RegionVariant < Variant
    has_one :region, through: :feature, source: :feature_instance, source_type: "Features::Region"

    def unique_editable_fields
      []
    end

    def required_fields
      [
        :iscn_name
      ]
    end

    def forbidden_fields
      [
        :vicc_compliant_name,
        :hgvs_description_ids,
        :clinvar_entry_ids,
        :ncit_id,
      ]
    end

    #TODO
    def generate_iscn_name
      name
    end

    def correct_coordinate_type
      if variant_coordinates.size > 0
        errors.add(:variant_coordinates, "Region Variants may not have coordinates")
      end
    end
  end
end
