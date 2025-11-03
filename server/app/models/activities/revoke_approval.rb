module Activities
  class RevokeApproval < Base
    attr_reader :approval

    def initialize(originating_user:, approval:, note:, organization_id: nil)
      super(organization_id: organization_id, user: originating_user, note: note)
      @approval = approval
    end

    private
    def create_activity
      @activity = RevokeApprovalActivity.create!(
        subject: approval.assertion,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::RevokeApproval.new(
        originating_user: user,
        approval: approval,
        organization_id: organization&.id,
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
      @approval = cmd.approval
    end

    def linked_entities
      [ approval ]
    end
  end
end
