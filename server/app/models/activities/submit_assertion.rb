module Activities
  class SubmitAssertion
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :originating_user, :assertion, :organization, :comment_body, :comment, :activity

    def initialize(originating_user:, assertion:, organization_id: nil, comment_body:)
      @originating_user = originating_user
      @assertion = assertion
      @organization = resolve_organization(originating_user, organization_id)
      @comment_body = comment_body
    end

    private
    def execute
      create_activity
      create_submission_event
      create_comment
      link_activity
    end

    def create_activity
      @activity = SubmitAssertionActivity.create!(
        subject: assertion,
        user: originating_user,
        organization: organization,
      )
    end

    def create_submission_event
      cmd = Actions::SubmitAssertion.new(
        originating_user: originating_user,
        assertion: assertion,
        organization_id: organization.id
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end
      events << cmd.events
    end

    def create_comment
      if comment_body.present?
        cmd = Actions::AddComment.new(
          title: "",
          body: comment_body,
          commenter: originating_user,
          commentable: assertion,
          organization_id: organization.id
        )
        cmd.perform
        if !cmd.succeeded?
          raise StandardError.new(cmd.errors.join(', '))
        end
        @comment = cmd.comment
        events << cmd.events
      end
    end

    def link_activity
      if comment
        activity.link_entities!([comment])
      end
      activity.events = events.flatten
    end
  end
end
