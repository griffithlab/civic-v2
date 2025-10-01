module Types::AdvancedSearch
  class EnumSearchOperator < Types::BaseEnum
    value "EQ"
    value "NE"
  end

  class EnumSearchInput
    @existing_types = {}

    # usage: Types::AdvancedSearch::EnumSearchInput.for(SomeType)
    # SomeType must itself be a valid input type (ie, or Enum)
    def self.for(input_type, is_activerecord_enum: false)
      unless input_type < GraphQL::Schema::Enum
        raise StandardError.new("Input type must be a GraphQL Enum")
      end
      # only define one wrapper type per wrapped type
      if @existing_types.has_key?(input_type)
        return @existing_types[input_type]
      else
        klass = generate_class(input_type: input_type, is_activerecord_enum: is_activerecord_enum)
        @existing_types[input_type] = klass
        return klass
      end
    end

    private_class_method def self.generate_class(input_type:, is_activerecord_enum:)
      class_name = "#{input_type.name.demodulize}SearchInputType"

      klass = Class.new(Types::BaseInputObject) do
        argument :value, input_type, required: true
        argument :operator, Types::AdvancedSearch::EnumSearchOperator, required: true

        if is_activerecord_enum
          def resolve_query_for_activerecord_enum(base_query, column_name)
            case operator
            when "EQ"
              base_query.where(column_name => value)
            when "NE"
              base_query.where.not(column_name => value)
            end
          end
        else
          def resolve_query_for_type(column_name)
            case operator
            when "EQ"
              [ "#{column_name} = ?", value ]
            when "NE"
              [ "#{column_name} != ?", value ]
            end
          end
        end
      end

      Object.const_set(class_name, klass)
      return klass
    end
  end
end
