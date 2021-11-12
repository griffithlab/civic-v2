module Types
  class ValidationErrorsType < Types::BaseObject
    field :validation_errors, [String], null: false
  end
end
