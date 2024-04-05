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
  end
end
