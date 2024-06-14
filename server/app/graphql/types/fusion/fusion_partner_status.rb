module Types
  class EvidenceSignificanceType < Types::BaseEnum
    value 'KNOWN', value: 'known'
    value 'UNKNOWN', value: 'unknown'
    value 'MULTIPLE', value: 'multiple'
  end
end
