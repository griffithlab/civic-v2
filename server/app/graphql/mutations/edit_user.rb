class Mutations::EditUser < Mutations::BaseMutation
  description "Updated currently logged in Users's profile"

  argument :name, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
    description: "The user's full name"
  argument :username, String, required: true,
    description: "The user's desired username"
  argument :email, String, required: true,
    description: "The user's email address"
  argument :area_of_expertise, Types::NullableValueInputType.for(Types::AreaOfExpertiseType), required: true,
    description: "The user's area of expertise"
  argument :orcid, Types::NullableValueInputType.for(GraphQL::Types::ID), required: true,
    description: "The the user's ORCID (Open Research and Contributor ID) identifier"
  argument :url, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
    description: "The user's personal website URL, omitting the https:// protocol part"
  argument :bio, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
    description: "A short biography describing the user's interests, accomplishments, associations, and/or anything else about they would like to share with the CIViC community."
  argument :country_id, Types::NullableValueInputType.for(GraphQL::Types::Int), required: true,
    description: "The internal CIViC ID of the country the user resides or studies in."
  argument :twitter_handle, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
    description: "The user's twitter handle"
  argument :facebook_profile, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
    description: "The user's Facebook profile handle"
  argument :linkedin_profile, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
    description: "The user's LinkedIn username"

  field :user, Types::Entities::UserType, null: false

  def ready?(**_)
    validate_user_logged_in

    return true
  end

  def authorized?(**_)
    return true
  end

  def resolve(**args)
    current_user = context[:current_user]

    if current_user.update(args)
      return {
        user: current_user,
      }
    else
      raise GraphQL::ExecutionError, current_user.errors.full_messages.join(", ")
    end
  end
end
