module Types
  class FieldValidationErrorType < Types::BaseObject
    field :field_name, String, null: false
    field :error, String, null: false
  end
end
