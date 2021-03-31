module Types
  class VariantOriginType < Types::BaseEnum
    value 'SOMATIC', value: 'Somatic'
    value 'RARE_GERMLINE', value: 'Rare Germline'
    value 'COMMON_GERMLINE', value: 'Common Germline'
    value 'UNKNOWN', value: 'Unknown'
    value 'NA', value: 'N/A'
    value 'GERMLINE_OR_SOMATIC', value: 'Germline or Somatic'
  end
end
