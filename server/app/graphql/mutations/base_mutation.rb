module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    argument_class Types::BaseArgument
    field_class Types::BaseField
    input_object_class Types::BaseInputObject
    object_class Types::BaseObject

    def validate_user_logged_in
      if ! context[:current_user].present?
        raise GraphQL::ExecutionError, "You must log in to perform this mutation."
      end
    end
  end
end
