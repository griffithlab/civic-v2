module Types
  class FeatureDeprecationReasonType < Types::BaseEnum
    value "DUPLICATE", value: "duplicate"
    value "INVALID", value: "invalid_feature"
    value "OTHER", value: "other"
  end
end
