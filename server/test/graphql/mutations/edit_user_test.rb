require "test_helper"

class EditUserTest < ActiveSupport::TestCase
  def setup
    @user = users(:curator)
    @edit_user_mutation = <<-GRAPHQL
      mutation(
        $name: NullableStringInput!,
        $username: String!,
        $email: String!,
        $areaOfExpertise: NullableAreaOfExpertiseTypeInput!,
        $orcid: NullableIDInput!,
        $url: NullableStringInput!,
        $bio: NullableStringInput!,
        $countryId: NullableIntInput!,
        $twitterHandle: NullableStringInput!,
        $facebookProfile: NullableStringInput!,
        $linkedinProfile: NullableStringInput!
      ) {
        editUser(input: {
          name: $name,
          username: $username,
          email: $email,
          areaOfExpertise: $areaOfExpertise,
          orcid: $orcid,
          url: $url,
          bio: $bio,
          countryId: $countryId,
          twitterHandle: $twitterHandle,
          facebookProfile: $facebookProfile,
          linkedinProfile: $linkedinProfile
        }) {
          user {
            id
            username
            email
            name
            bio
            url
            areaOfExpertise
          }
        }
      }
    GRAPHQL
  end

  def default_variables(overrides = {})
    {
      name: { value: "Updated Name" },
      username: "updated_curator",
      email: "updated@example.com",
      areaOfExpertise: { value: "CLINICAL_SCIENTIST" },
      orcid: { unset: true },
      url: { unset: true },
      bio: { value: "A short bio about me." },
      countryId: { unset: true },
      twitterHandle: { unset: true },
      facebookProfile: { unset: true },
      linkedinProfile: { unset: true },
    }.merge(overrides)
  end

  test "requires authentication" do
    response = execute_mutation(@edit_user_mutation, variables: default_variables)
    assert_graphql_error(response, /must log in/i)
  end

  test "updates the current user's profile" do
    response = execute_mutation(
      @edit_user_mutation,
      user: @user,
      variables: default_variables,
    )
    result = response.dig("data", "editUser", "user")
    assert_not_nil result
    assert_equal "updated_curator", result["username"]
    assert_equal "updated@example.com", result["email"]
    assert_equal "Updated Name", result["name"]
    assert_equal "A short bio about me.", result["bio"]
  end

  test "can unset nullable fields" do
    response = execute_mutation(
      @edit_user_mutation,
      user: @user,
      variables: default_variables(
        name: { unset: true },
        bio: { unset: true },
      ),
    )
    result = response.dig("data", "editUser", "user")
    assert_not_nil result
    assert_nil result["name"]
    assert_nil result["bio"]
  end
end
