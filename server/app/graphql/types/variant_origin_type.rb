module Types
  class VariantOriginType < Types::BaseEnum
    value 'SOMATIC', value: 'Somatic'
    value 'RAREGERMLINE', value: 'Rare Germline'
    value 'COMMONGERMLINE', value: 'Common Germline'
    value 'UNKNOWN', value: 'Unknown'
    value 'NA', value: 'N/A'
    value 'GERMLINEORSOMATIC', value: 'Germline or Somatic'
  end
end
