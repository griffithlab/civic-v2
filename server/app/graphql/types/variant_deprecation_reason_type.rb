module Types
  class VariantDeprecationReasonType < Types::BaseEnum
    value 'DUPLICATE', value: 'duplicate'
    value 'INVALID', value: 'invalid_variant'
    value 'OTHER', value: 'other'
    value 'FEATURE_DEPRECATED', value: 'feature_deprecated'
  end
end
