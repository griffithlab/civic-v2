module Types
  class VariantCategories < Types::BaseEnum
    value 'GENE', value: 'Variants::GeneVariant'
    value 'FACTOR', value: 'Variants::FactorVariant'
    value 'FUSION', value: 'Variants::FusionVariant'
  end
end
