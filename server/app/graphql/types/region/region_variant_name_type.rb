module Types::Region
  class RegionVariantNameType < Types::BaseEnum
    value "TRANSLOCATION", value: "Translocation"
    value "DELETION", value: "Deletion"
    value "HOMOZYGOUS_DELETION", value: "Homozygous Deletion"
    value "ADDITION", value: "Addition"
    value "DUPLICATION", value: "Duplication"
    value "TRIPLICATION", value: "Triplication"
    value "AMPLIFICATION", value: "Amplification"
  end
end
