module Variants
  class FactorVariant < Variant
    has_one :factor, through: :feature,
      source: :feature_instance, source_type: "Features::Factor"

    def unique_editable_fields
      [
        :feature_id,
        :name,
        :ncit_id,
      ]
    end

    def required_fields
      []
    end

    def forbidden_fields
      [
        :vicc_compliant_name,
        :hgvs_description_ids,
        :clinvar_entry_ids,
      ]
    end

    def correct_coordinate_type
      if variant_coordinates.size > 0
        errors.add(:variant_coordinates, "Factor Variants may not have coordinates")
      end
    end
  end
end
