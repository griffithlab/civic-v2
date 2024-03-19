module Variants
  class FactorVariant < Variant
    def editable_fields
      [
        :ncit_id
      ]
    end

    def required_fields
      []
    end

    def compatible_features
      [
        Features::Factor
      ]
    end
  end
end
