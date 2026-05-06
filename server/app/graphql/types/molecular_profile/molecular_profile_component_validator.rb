module Types::MolecularProfile
  class MolecularProfileComponentValidator < GraphQL::Schema::Validator
    def validate(object, context, value)
      if value.variant_components.blank? && value.complex_components.blank?
        return "Must supply at least one Variant or complex component"
      end

      number_of_items = 0
      if value.variant_components.present?
        number_of_items += value.variant_components.size
      end

      if value.complex_components.present?
        number_of_items += value.complex_components.size
      end

      if number_of_items > 1 && value.boolean_operator.nil?
        return "Must supply a Boolean Operator when supplying more than one component."
      end

      variant_ids = value.variant_ids
      if variant_ids.size != variant_ids.uniq.size
        return "You may not use the same variant multiple times in one MP expression."
      end

      return true
    end
  end
end
