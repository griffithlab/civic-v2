module Activities
  class SubmitEvidenceItem < Base
    attr_reader :evidence_item 

    def initialize(originating_user:, evidence_item:, organization_id: nil, comment_body:)
      super(organization_id: organization_id, user: originating_user, comment_body: comment_body)
      @evidence_item = evidence_item
    end

    private
    def create_activity
      @activity = SubmitEvidenceItemActivity.create!(
        subject: evidence_item,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::SubmitEvidenceItem.new(
        originating_user: user,
        evidence_item: evidence_item,
        organization_id: organization&.id
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end
      events << cmd.events
    end

    def commentable
      evidence_item
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
