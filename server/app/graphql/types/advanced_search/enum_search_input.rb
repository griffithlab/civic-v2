module Types::AdvancedSearch
  class EnumSearchOperator < Types::BaseEnum
    value "EQ"
    value "NE"
  end

  class EnumSearchInput
    @existing_types = {}

    # usage: Types::AdvancedSearch::EnumSearchInput.for(SomeType)
    # SomeType must itself be a valid input type (ie, or Enum)
    def self.for(input_type)
      unless input_type < GraphQL::Schema::Enum
        raise StandardError.new("Input type must be a GraphQL Enum")
      end
      # only define one wrapper type per wrapped type
      if @existing_types.has_key?(input_type)
        return @existing_types[input_type]
      else
        klass = generate_class(input_type: input_type)
        @existing_types[input_type] = klass
        return klass
      end
    end

    private_class_method def self.generate_class(input_type:)
      class_name = "#{input_type.name.demodulize}SearchInputType"

      klass = Class.new(Types::BaseInputObject) do
        argument :value, input_type, required: true
        argument :comparison_operator, Types::AdvancedSearch::EnumSearchOperator, required: true

        def resolve_query_for_type(column_name)
          case comparison_operator
          when "EQ"
            [ "#{column_name} = ?", value ]
          when "NE"
            [ "#{column_name} != ?", value ]
          end
        end
      end

      Object.const_set(class_name, klass)
      return klass
    end
  end
end
