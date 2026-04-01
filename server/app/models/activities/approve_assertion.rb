module Activities
  class ApproveAssertion < Base
    attr_reader :assertion, :approval

    def initialize(originating_user:, assertion:, organization_id: nil)
      super(organization_id: organization_id, user: originating_user)
      @assertion = assertion
    end

    private
    def create_activity
      @activity = ApproveAssertionActivity.create!(
        subject: assertion,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::ApproveAssertion.new(
        originating_user: user,
        assertion: assertion,
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
