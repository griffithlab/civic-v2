module Activities
  class ModerateEvidenceItem < Base
    attr_reader :evidence_item, :new_status

    def initialize(originating_user:, evidence_item:, organization_id: nil, new_status:, note: nil)
      super(organization_id: organization_id, user: originating_user)
      @evidence_item = evidence_item
      @new_status = new_status
      @note = note
    end

    private
    def create_activity
      @activity = ModerateEvidenceItemActivity.create!(
        subject: evidence_item,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::ModerateEvidenceItem.new(
        originating_user: user,
        evidence_item: evidence_item,
        organization_id: organization&.id,
        new_status: new_status
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
