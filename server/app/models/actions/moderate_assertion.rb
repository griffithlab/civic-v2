module Actions
  class ModerateAssertion
    include Actions::Transactional

    attr_reader :assertion, :originating_user, :organization_id, :new_status

    def initialize(assertion:, originating_user:, organization_id:, new_status:)
      @assertion = assertion
      @originating_user = originating_user
      @organization_id = organization_id
      @new_status = new_status
    end

    private
    def execute
      update_status
      create_event
    end

    def update_status
      assertion.lock!
      if assertion.status == new_status
        raise StandardError.new("Attempted to update AID#{assertion.id} to #{new_status} but it already was.")
      end

      assertion.status = new_status
      assertion.save!
      assertion.subscribe_user(originating_user)
    end

    def create_event
      action = if new_status == "submitted"
                 "assertion reverted"
      else
                 "assertion #{new_status}"
      end


      events << Event.new(
        action: action,
        originating_user: originating_user,
        subject: assertion,
        organization_id: organization_id,
        originating_object: assertion
      )
    end
  end
end
