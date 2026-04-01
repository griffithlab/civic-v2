module Actions
  class RevokeApproval
    include Actions::Transactional

    attr_reader :approval, :originating_user, :organization_id, :approval, :previous_status

    def initialize(approval:, originating_user:, organization_id:)
      @approval = approval
      @originating_user = originating_user
      @organization_id = organization_id
      @previous_status = approval.status
    end

    private
    def execute
      revoke_approval
      create_event
    end

    def revoke_approval
      approval.status = "revoked"
      approval.last_reviewed = Time.now
      approval.user = originating_user
      approval.save!
    end

    def create_event
      events << Event.new(
        action: "assertion approval revoked",
        originating_user: originating_user,
        subject: approval.assertion,
        organization_id: organization_id,
        originating_object: approval.assertion
      )
    end
  end
end
