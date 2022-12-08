module Types
  class VariantOriginType < Types::BaseEnum
    value 'SOMATIC', value: 'Somatic'
    value 'RARE_GERMLINE', value: 'Rare Germline'
    value 'COMMON_GERMLINE', value: 'Common Germline'
    value 'UNKNOWN', value: 'Unknown'
    value 'MIXED', value: 'Mixed'
    value 'NA', value: 'N/A'
  end
end
