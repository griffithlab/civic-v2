module Types::Entities
  class CoordinateTypeType < Types::BaseEnum
    Constants::VALID_COORDINATE_TYPES.each do |ct|
      value ct.upcase.gsub(" ", "_"), value: ct
    end
  end
end
