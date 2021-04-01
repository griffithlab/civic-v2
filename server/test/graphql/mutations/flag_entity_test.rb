require "test_helper"

class FlagEntityTest < ActiveSupport::TestCase
  def setup
    @gene = genes(:braf)
    @editor_in_multiple_orgs = users(:editor_in_multiple_orgs)
    @curator = users(:curator)
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

  test "flagging works" do
    response = Civic2Schema.execute(@query_string, context: { current_user: @curator })
    flag_id = response["data"]["flagEntity"]["flag"]["id"]
    flag = Flag.find(flag_id)
    assert_not_nil(flag)
    assert_equal(flag.flaggable, @gene)
    assert_equal(flag.flagging_user, @curator)
    assert_equal(flag.state, 'open')
    assert(Gene.find(@gene.id).flagged)
    comment = Comment.find_by(commentable: flag)
    assert_not_nil(comment)
    assert_equal(comment.comment, "This is a test flag")
    event = Event.find_by(originating_object: flag)
    assert_not_nil(event)
    assert_equal(event.action, 'flagged')
    assert_equal(event.originating_user, @curator)
    assert_equal(event.subject, @gene)
  end
end
