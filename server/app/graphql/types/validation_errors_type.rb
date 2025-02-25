module Types
  class ValidationErrorsType < Types::BaseObject
    field :validation_errors, [ Types::FieldValidationErrorType ], null: false
    field :generic_errors, [ String ], null: false
  end
end
