module Types
  class MolecularProfileDeprecationReasonType < Types::BaseEnum
    value "DUPLICATE", value: "duplicate"
    value "INVALID", value: "invalid_molecular_profile"
    value "OTHER", value: "other"
    value "VARIANT_DEPRECATED", value: "variant_deprecated"
  end
end
