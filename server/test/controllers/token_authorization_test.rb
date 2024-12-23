require "test_helper"

class TokenAuthorizationTest < ActionDispatch::IntegrationTest
  def setup
    @user1 = users(:curator)
    @user2 = users(:editor)
    @gene = features(:braf)
    @query_string = <<-GRAPHQL
      query {
        viewer {
          id
          username
        }
      }
    GRAPHQL
    @mutation_string = <<-GRAPHQL
      mutation {
        addComment(input: { body: "This is a test comment", subject: { id: #{@gene.id}, entityType: FEATURE } }) {
          comment {
            id
            comment
          }
        }
      }
    GRAPHQL
    @gene = features(:braf)
    @api_key = ApiKey.create!(bearer: @user1)
    @revoked_api_key = ApiKey.create!(bearer: @user1, revoked: true)
  end

  test "getting the viewer without a bearer token" do
    post "/api/graphql", params: { query: @query_string }
    assert_nil JSON.parse(@response.body)["data"]["viewer"]
  end

  test "getting the viewer with a bearer token" do
    post "/api/graphql", params: { query: @query_string }, headers: { "Authorization" => "Bearer #{@api_key.token}" }
    response_data = JSON.parse(@response.body)["data"]["viewer"]
    assert_equal response_data["id"], @user1.id
    assert_equal response_data["username"], @user1.username
  end

  test "getting the viewer with a revoked bearer token" do
    post "/api/graphql", params: { query: @query_string }, headers: { "Authorization" => "Bearer #{@revoked_api_key.token}" }
    assert_nil JSON.parse(@response.body)["data"]["viewer"]
  end

  test "adding a comment without a bearer token" do
    post "/api/graphql", params: { query: @mutation_string }
    assert_match (/You must log in to perform this mutation/), JSON.parse(@response.body)["errors"].first["message"]
  end

  test "adding a comment with a valid bearer token" do
    post "/api/graphql", params: { query: @mutation_string }, headers: { "Authorization" => "Bearer #{@api_key.token}" }
    response_data = JSON.parse(@response.body)["data"]["addComment"]["comment"]
    assert_not_nil response_data
    assert_equal response_data["comment"], "This is a test comment"
  end
end
