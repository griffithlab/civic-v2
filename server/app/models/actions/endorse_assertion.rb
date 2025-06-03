module Actions
  class EndorseAssertion
    include Actions::Transactional

    attr_reader :assertion, :originating_user, :organization_id, :endorsement, :previous_status

    def initialize(assertion:, originating_user:, organization_id:)
      @assertion = assertion
      @originating_user = originating_user
      @organization_id = organization_id
    end

    private
    def execute
      create_or_update_endorsement
      create_event
    end

    def create_or_update_endorsement
      existing_endorsement = Endorsement.where(
        assertion: assertion,
        organization_id: organization_id,
      ).first

      if existing_endorsement
        @previous_status = existing_endorsement.status
        @endorsement = existing_endorsement
        @endorsement.user = originating_user
        @endorsement.status = "active"
        @endorsement.last_reviewed = Time.now
        @endorsement.save!
      else
        @previous_status = nil
        @endorsement = Endorsement.create!(
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
        action: "assertion endorsed",
        originating_user: originating_user,
        subject: assertion,
        organization_id: organization_id,
        originating_object: assertion
      )
    end
  end
end
