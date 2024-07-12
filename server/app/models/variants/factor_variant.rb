module Variants
  class FactorVariant < Variant
    def unique_editable_fields
      [
        :ncit_id,
      ]
    end

    def required_fields
      []
    end

    def correct_coordinate_type
      if variant_coordinates.size > 0
        errors.add(:variant_coordinates, "Factor Variants may not have coordinates")
      end
    end
  end
end
