module Types::Errors
  class UserError < Types::BaseObject
    description 'An error in user provided data'

    field :message, String, null: true
    field :path, [String], null: true, description: 'Input causing the error'
  end
end