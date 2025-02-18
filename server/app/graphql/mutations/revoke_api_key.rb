 class Mutations::RevokeApiKey < Mutations::BaseMutation
   description 'Revoke an API key for the current user.'
 
   argument :id, Int, required: true, description: 'ID of the API key to be revoked.'
 
   field :success, Boolean, null: false, description: 'Indicates whether the API key was successfully revoked.'
 
   def resolve(id:)
    validate_user_logged_in
    api_key = context[:current_user].api_keys.find_by(id: id)

    if api_key
      api_key.revoked = true
      res = api_key.save
      { success: res }
    else
      raise GraphQL::ExecutionError, 'API key not found or not authorized to revoke.'
    end
  end
end
