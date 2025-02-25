module Actions
  class SubmitAssertion
    include Actions::Transactional
    attr_reader :assertion, :originating_user, :organization_id

    def initialize(assertion:, originating_user:, organization_id:)
      @assertion = assertion
      @originating_user = originating_user
      @organization_id = organization_id
    end

    private
    def execute
      assertion.status = "submitted"
      assertion.evidence_items_count = assertion.evidence_item_ids.size
      assertion.save!
      assertion.subscribe_user(originating_user)
      create_event
    end

    def create_event
      events << Event.new(
        action: "assertion submitted",
        originating_user: originating_user,
        subject: assertion,
        organization_id: organization_id,
        originating_object: assertion
      )
    end
  end
end
