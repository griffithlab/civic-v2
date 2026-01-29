module Actions
  class ApproveAssertion
    include Actions::Transactional

    attr_reader :assertion, :originating_user, :organization_id, :approval, :previous_status

    def initialize(assertion:, originating_user:, organization_id:)
      @assertion = assertion
      @originating_user = originating_user
      @organization_id = organization_id
    end

    private
    def execute
      create_or_update_approval
      create_event
    end

    def create_or_update_approval
      existing_approval = Approval.where(
        assertion: assertion,
        organization_id: organization_id,
      ).first

      if existing_approval
        @previous_status = existing_approval.status
        @approval = existing_approval
        @approval.user = originating_user
        @approval.status = "active"
        @approval.last_reviewed = Time.now
        @approval.save!
      else
        @previous_status = nil
        @approval = Approval.create!(
          organization_id: organization_id,
          user: originating_user,
          status: "active",
          assertion: assertion,
          last_reviewed: Time.now,
        )
      end
    end

    def create_event
      events << Event.new(
        action: "assertion approved",
        originating_user: originating_user,
        subject: assertion,
        organization_id: organization_id,
        originating_object: assertion
      )
    end
  end
end
