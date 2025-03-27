module Activities
  class ModerateAssertion < Base
    attr_reader :assertion, :new_status

    def initialize(originating_user:, assertion:, organization_id: nil, new_status:, note: nil)
      super(organization_id: organization_id, user: originating_user, note: note)
      @assertion = assertion
      @new_status = new_status
      @note = note
    end

    private
    def create_activity
      @activity = ModerateAssertionActivity.create!(
        subject: assertion,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::ModerateAssertion.new(
        originating_user: user,
        assertion: assertion,
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
