module Types::Fusion
  class RegulatoryFusionTypeType < Types::BaseEnum
    Constants::REGULATORY_FUSION_ENUM_TYPES.each do |(name, _)|
      value name.upcase, value: name
    end
  end
end
