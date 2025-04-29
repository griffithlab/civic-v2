module Activities
  class EndorseAssertion < Base
    attr_reader :assertion, :endorsement

    def initialize(originating_user:, assertion:, organization_id: nil)
      super(organization_id: organization_id, user: originating_user)
      @assertion = assertion
    end

    private
    def create_activity
      @activity = EndorseAssertionActivity.create!(
        subject: assertion,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::EndorseAssertion.new(
        originating_user: user,
        assertion: assertion,
        organization_id: organization&.id,
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
      @endorsement = cmd.endorsement
    end

    def linked_entities
      [ endorsement ]
    end
  end
end
