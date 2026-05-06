module Types
  class ApiKeyType < Types::BaseObject
    field :id, Int, null: false
    field :reminder, String, null: false
    field :token, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true

    def reminder
      size = object.token_suffix.length
      padding = ApiKey::TOKEN_LENGTH - size
      "#{object.token_prefix}#{"*" * padding}#{object.token_suffix}"
    end
  end
end
