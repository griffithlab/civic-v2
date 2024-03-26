module Variants
  class FactorVariant < Variant
    def editable_fields
      [
        :feature_id,
        :name,
        :ncit_id,
        :variant_type_ids,
      ]
    end

    def required_fields
      []
    end
  end
end
