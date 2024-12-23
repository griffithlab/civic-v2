class Mutations::GenerateApiKey < Mutations::BaseMutation
  description 'Generate a new API key for the current user.'

  field :api_key, Types::ApiKeyType, null: true, description: 'The newly created API key.'
  field :user, Types::Entities::UserType

  def resolve
    validate_user_logged_in
    current_user = context[:current_user]

    api_key = ApiKey.create(bearer: current_user)

    unless api_key.valid?
      raise GraphQL::ExecutionError, 'Failed to generate API Key'
    end

    {
      api_key: api_key,
      user: current_user
    }
  end
end
