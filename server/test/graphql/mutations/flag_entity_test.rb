require "test_helper"

class FlagEntityTest < ActiveSupport::TestCase
  def setup
    @gene = genes(:braf)
    @editor_in_multiple_orgs = users(:editor_in_multiple_orgs)
    @query_string = <<-GRAPHQL
    mutation {
      flagEntity(
        input: {
          subject: { id: #{@gene.id}, entityType: GENE }
          comment: "This is a test flag"
        }
      ) {
        flag {
          id
        }
      }
    }
    GRAPHQL
  end

  test "must be logged in" do
    response = Civic2Schema.execute(@query_string)
    assert_equal(response["errors"][0]["message"], "You must log in to perform this mutation.")
  end

  test "multi-org user must specify acting org" do
    response = Civic2Schema.execute(@query_string, context: { current_user: @editor_in_multiple_orgs })
    assert_equal(response["errors"][0]["message"], "User #{@editor_in_multiple_orgs.id} belongs to multiple orgs but none specified.")
  end

  test "acting org does not exist" do
    query_string = <<-GRAPHQL
    mutation {
      flagEntity(
        input: {
          subject: { id: #{@gene.id}, entityType: GENE }
          comment: "This is a test flag"
          organizationId: 1
        }
      ) {
        flag {
          id
        }
      }
    }
    GRAPHQL
    response = Civic2Schema.execute(query_string, context: { current_user: @editor_in_multiple_orgs })
    assert_equal(response["errors"][0]["message"], "Organization with id 1 doesn't exist.")
  end

  test "user does not belong to acting org" do
    org_id = organizations(:clingen).id
    query_string = <<-GRAPHQL
    mutation {
      flagEntity(
        input: {
          subject: { id: #{@gene.id}, entityType: GENE }
          comment: "This is a test flag"
          organizationId: #{org_id}
        }
      ) {
        flag {
          id
        }
      }
    }
    GRAPHQL
    response = Civic2Schema.execute(query_string, context: { current_user: @editor_in_multiple_orgs })
    assert_equal(response["errors"][0]["message"], "User cannot perform actions on behalf of organization ##{org_id}")
  end

  test "subject does not exist" do
    query_string = <<-GRAPHQL
    mutation {
      flagEntity(
        input: {
          subject: { id: 1, entityType: GENE }
          comment: "This is a test flag"
          organizationId: #{@editor_in_multiple_orgs.organizations.first.id}
        }
      ) {
        flag {
          id
        }
      }
    }
    GRAPHQL
    response = Civic2Schema.execute(query_string, context: { current_user: @editor_in_multiple_orgs })
    assert_equal(response["errors"][0]["message"], "Subject with the given ID doesn't exist")
  end
end
