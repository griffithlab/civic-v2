module Variants
  class FactorVariant < Variant
    def editable_fields
      [
        :feature_id,
        :name,
        :ncit_id
      ]
    end

    def required_fields
      []
    end
  end
end
