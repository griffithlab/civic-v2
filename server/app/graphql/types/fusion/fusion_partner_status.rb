module Types::Fusion
  class FusionPartnerStatus < Types::BaseEnum
    value 'KNOWN', value: 'known'
    value 'UNKNOWN', value: 'unknown'
    value 'MULTIPLE', value: 'multiple'
    value 'REGULATORY', value: 'regulatory'
  end
end
