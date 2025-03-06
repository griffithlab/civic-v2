module Activities
  class SubmitEvidenceItem < Base
    attr_reader :evidence_item

    def initialize(originating_user:, evidence_item:, organization_id: nil, note:)
      super(organization_id: organization_id, user: originating_user, note: note)
      @evidence_item = evidence_item
    end

    private
    def setup
      if !evidence_item.valid?
        msg = evidence_item.errors.map(&:full_message).join(", ")
        raise StandardError.new(msg)
      end
    end

    def create_activity
      @activity = SubmitEvidenceItemActivity.create!(
        subject: evidence_item,
        user: user,
        organization: organization,
        note: note
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
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
    end

    def linked_entities
      []
    end
  end
end
