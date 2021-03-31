module Actions
  class CreateMolecularProfile
    include Actions::Transactional

    attr_reader :variants, :structure, :molecular_profile

    def initialize(variants:, structure:)
      @variants = variants
      @structure = structure
    end

    private
    def execute
      name = parse_name_from_complex_component(structure)
      mp = MolecularProfile.where(name: name).first_or_create
      mp.variants = variants
      mp.save
      @molecular_profile = mp
      #TODO: do we need an event here?
      #TODO: do we want to subscribe the creating user to the mp?
    end

    def parse_name_from_complex_component(complex_component)
      if complex_component.variant_components.present?
        variant_component_name_string = parse_name_from_variant_components(complex_component.variant_components, complex_component.boolean_operator)
      else
        variant_component_name_string = nil
      end

      if complex_component.complex_components.present?
        complex_component_names = complex_component.complex_components.map do |c|
          complex_component_names = parse_name_from_complex_component(c)
        end
        if complex_component.complex_components.size > 1
          complex_component_name_string = complex_component_names.join(" #{complex_component.boolean_operator} " )
        else
          complex_component_name_string = complex_component_names.first
        end
      else
        complex_component_name_string = nil
      end

      if variant_component_name_string.present?
        if complex_component_name_string.present?
          return "#{variant_component_name_string} #{complex_component.boolean_operator} ( #{complex_component_name_string} )"
        else
          return variant_component_name_string
        end
      elsif complex_component_name_string.present?
        return complex_componen_name_string
      end
    end

    def parse_name_from_variant_components(components, boolean_operator)
      variant_names = components.map do |c|
        variant = Variant.find(c.variant_id)
        name = "#{variant.gene.name} #{variant.name}"
        if c.not
          name = "NOT #{name}"
        end
        name
      end
      if variant_names.size > 1
        variant_name_string = variant_names.join(" #{boolean_operator} ")
      else
        variant_name_string = variant_names.first
      end
      return variant_name_string
    end
  end
end
