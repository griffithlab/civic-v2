module Types::MolecularProfile
  class MolecularProfileComponentInput < Types::BaseInputObject
    argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false,
      description: "Boolean operation used to combined the components into a Molecular Profile."

    argument :variant_components, [ Types::MolecularProfile::VariantComponentType ],  required: false,
      description: "One or more single Variants that make up the Molecular Profile."

    argument :complex_components, [ Types::MolecularProfile::MolecularProfileComponentInput ],  required: false,
      description: "One or more complex (multi-Variant) components that make up the Molecular Profile."


    def variant_ids
      ids = []
      if variant_components.present?
        ids.concat(variant_components.map(&:variant_id))
      end

      if complex_components.present?
        complex_components.map { |c| ids.concat(c.variant_ids) }
      end

      ids
    end
  end
end
