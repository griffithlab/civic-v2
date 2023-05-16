module Activities
  class SubmitEvidenceItem
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :originating_user, :evidence_item, :organization, :comment_body, :comment, :activity

    def initialize(originating_user:, evidence_item:, organization_id: nil, comment_body:)
      @originating_user = originating_user
      @evidence_item = evidence_item
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
      @activity = SubmitEvidenceItemActivity.create!(
        subject: evidence_item,
        user: originating_user,
        organization: organization,
      )
    end

    def create_submission_event
      cmd = Actions::SubmitEvidenceItem.new(
        originating_user: originating_user,
        evidence_item: evidence_item,
        organization_id: organization.id
      )
      cmd.perform
      events << cmd.events
    end

    def create_comment
      if comment_body.present?
        cmd = Actions::AddComment.new(
          title: "",
          body: comment_body,
          commenter: originating_user,
          commentable: evidence_item,
          organization_id: organization.id
        )
        cmd.perform
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
