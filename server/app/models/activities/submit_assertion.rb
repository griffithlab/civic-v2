module Activities
  class SubmitAssertion < Base
    attr_reader :assertion

    def initialize(originating_user:, assertion:, organization_id: nil, note:)
      super(organization_id: organization_id, user: originating_user, note: note)
      @assertion = assertion
    end

    private
    def setup
      if !assertion.valid?
        msg = assertion.errors.map(&:full_message).join(", ")
        raise StandardError.new(msg)
      end
    end

    def create_activity
      @activity = SubmitAssertionActivity.create!(
        subject: assertion,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::SubmitAssertion.new(
        originating_user: user,
        assertion: assertion,
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
