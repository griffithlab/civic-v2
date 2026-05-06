module Variants::Regions
  class VariantAdapterBase
    attr_reader :variant

    def initialize(variant)
      @variant = variant
    end

    def validate!
      validate
      if variant.errors[:region].any?
        raise StandardError.new(variant.errors[:region].join("\n"))
      end
    end

    def generate_iscn_name
      raise StandardError.new("Implement in subclass")
    end

    def validate
      raise StandardError.new("Implement in subclass")
    end

    def default_variant_aliases
      []
    end
  end
end
