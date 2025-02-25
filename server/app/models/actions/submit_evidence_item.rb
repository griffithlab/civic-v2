module Actions
  class SubmitEvidenceItem
    include Actions::Transactional
    attr_reader :evidence_item, :originating_user, :organization_id

    def initialize(evidence_item:, originating_user:, organization_id:)
      @evidence_item = evidence_item
      @originating_user = originating_user
      @organization_id = organization_id
    end

    private
    def execute
      evidence_item.status = "submitted"
      evidence_item.save!
      evidence_item.subscribe_user(originating_user)
      create_event
    end

    def create_event
      events << Event.new(
        action: "submitted",
        originating_user: originating_user,
        subject: evidence_item,
        organization_id: organization_id,
        originating_object: evidence_item
      )
    end
  end
end
