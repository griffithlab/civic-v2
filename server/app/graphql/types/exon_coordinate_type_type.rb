module Types
  class ExonCoordinateTypeType < Types::BaseEnum
    Constants::VALID_EXON_COORDINATE_TYPES.each do |ct|
      value ct.upcase.gsub(" ", "_"), value: ct
    end
  end
end
