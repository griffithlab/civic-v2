module Activities
  class SubmitAssertion < Base
    attr_reader :assertion

    def initialize(originating_user:, assertion:, organization_id: nil, comment_body:)
      super(organization_id: organization_id, user: originating_user, comment_body: comment_body)
      @assertion = assertion
    end

    private
    def create_activity
      @activity = SubmitAssertionActivity.create!(
        subject: assertion,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::SubmitAssertion.new(
        originating_user: user,
        assertion: assertion,
        organization_id: organization.id
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end
      events << cmd.events
    end

    def commentable
      assertion
    end

    def linked_entities
      if comment.present?
        [comment]
      else
        []
      end
    end
  end
end
