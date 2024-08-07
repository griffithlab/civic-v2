module Types
  class VariantCoordinateTypeType < Types::BaseEnum
    Constants::VALID_VARIANT_COORDINATE_TYPES.each do |ct|
      value ct.upcase.gsub(" ", "_"), value: ct
    end
  end
end
