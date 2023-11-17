module Types
  class VariantDeprecationReasonType < Types::BaseEnum
    value 'DUPLICATE', value: 'duplicate'
    value 'INVALID', value: 'invalid_variant'
    value 'OTHER', value: 'other'
  end
end
