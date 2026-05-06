module Types::MolecularProfile
  class VariantComponentType < Types::BaseInputObject
    description "Representation of a Variant's membership in a Molecular Profile."

    argument :variant_id, Int, required: true,
      description: "The ID of the Variant involved in the Molecular Profile."
    argument :not, Boolean, required: true,
      default_value: false,
      description: "When set to true, this means the NOT operator will be applied to the Variant in the Molecluar Profile."
  end
end
