class GenerateAndRevokeApiKeysTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @generate_api_key_mutation = <<-GRAPHQL
      mutation {
        generateApiKey(input: {}) {
          apiKey {
            id
            token
          }
          user {
            id
            apiKeys {
              id
              token
            }
          }
        }
      }
    GRAPHQL

    @revoke_api_key_mutation = <<-GRAPHQL
      mutation($id: Int!) {
        revokeApiKey(input: { id: $id }) {
          success
        }
      }
    GRAPHQL

    @get_api_keys_query = <<-GRAPHQL
      query {
        viewer {
          apiKeys {
            id
            reminder
          }
        }
      }
    GRAPHQL
  end

  test "calling the generate api key mutation results in two associated api keys" do
    # Generate the first API key
    response = execute_mutation(@generate_api_key_mutation, user: @user)
    assert response.dig("data", "generateApiKey", "apiKey").present?

    # Generate the second API key
    response = execute_mutation(@generate_api_key_mutation, user: @user)
    assert response.dig("data", "generateApiKey", "apiKey").present?

    # Fetch the user's API keys
    response = execute_mutation(@get_api_keys_query, user: @user)
    api_keys = response.dig("data", "viewer", "apiKeys")
    assert_equal 2, api_keys.size
  end

  test "calling the revoke api key mutation sets the status of the api key to revoked" do
    # Generate an API key
    response = execute_mutation(@generate_api_key_mutation, user: @user)
    api_key_id = response.dig("data", "generateApiKey", "apiKey", "id")
    assert api_key_id.present?

    # Revoke the API key
    response = execute_mutation(@revoke_api_key_mutation, variables: { id: api_key_id }, user: @user)
    assert response.dig("data", "revokeApiKey", "success")

    # Fetch the user's API keys
    response = execute_mutation(@get_api_keys_query, user: @user)
    api_keys = response.dig("data", "viewer", "apiKeys")
    revoked_key = api_keys.find { |key| key["id"] == api_key_id }
    assert_nil revoked_key

    # Verify the API key status in the database
    api_key = ApiKey.find(api_key_id)
    assert api_key.revoked
  end
end
