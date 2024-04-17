module Types::Revisions
  class VariantCoordinateTypesType < Types::BaseEnum
    description 'Enumeration of all valid variant coordinate types'
    Constants::VALID_COORDINATE_TYPES.each do |ct|
      value ct.upcase.gsub(" ", "_"), value: ct
    end
  end
end
