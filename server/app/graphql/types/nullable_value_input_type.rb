class Types::NullableValueInputType
  @existing_types = {}

  # usage: NullableValueInputType.for(SomeType)
  # SomeType must itself be a valid input type (ie, Scalar, InputObject, or Enum)
  def self.for(input_type)
    valid_parents = [
      GraphQL::Schema::Scalar,
      GraphQL::Schema::InputObject,
      GraphQL::Schema::Enum
    ]
    unless valid_parents.any? { |p| input_type < p }
      raise StandardError.new("Input type must be a GraphQL Scalar, Enum, or Input Object")
    end

    # only define one wrapper type per wrapped type
    if @existing_types.has_key?(input_type)
      @existing_types[input_type]
    else
      klass = generate_class(input_type: input_type)
      @existing_types[input_type] = klass
      klass
    end
  end

  private_class_method def self.generate_class(input_type:)
    className = "Nullable#{input_type.name.demodulize}InputType"

    # define a new class that inherits from BaseInputObject
    klass = Class.new(Types::BaseInputObject) do
      description <<~DOC.strip
        An input object that represents a field value that can be "unset" or changed to null.
        To change the field's value to null, pass unset as true, otherwise pass in the desired value as value.
        This is to work around two issues with the GraphQL spec: lack of support for unions in input types
        and the inability to have an input object argument be both required _and_ nullable at the same time.
      DOC

      argument :unset, GraphQL::Types::Boolean, description: "Set to true if you wish to set the field's value to null.", required: false
      argument :value, input_type, description: "The desired value for the field. Mutually exclusive with unset.", required: false

      validates required: {
        one_of: [ :unset, :value ],
        # this does double duty, disallowing empty string values in value and false in unset
        allow_blank: false,
        message: "You must specify a value or unset but not both."
      }

      def prepare
        if unset
          nil
        else
          value
        end
      end
    end

    # create a constant identifier for our new class based on the generated name
    Object.const_set(className, klass)
    klass
  end
end
