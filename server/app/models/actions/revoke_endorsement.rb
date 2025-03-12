module Actions
  class RevokeEndorsement
    include Actions::Transactional

    attr_reader :endorsement, :originating_user, :organization_id, :endorsement, :endorsement_log, :previous_status

    def initialize(endorsement:, originating_user:, organization_id:)
      @endorsement = endorsement
      @originating_user = originating_user
      @organization_id = organization_id
      @previous_status = endorsement.status
    end

    private
    def execute
      revoke_endorsement
      create_log_entry
      create_event
    end

    def revoke_endorsement
      endorsement.status = "revoked"
      endorsement.last_reviewed = Time.now
      endorsement.user = originating_user
      endorsement.save!
    end

    def create_log_entry
      @endorsement_log = EndorsementLog.create!(
        old_status: previous_status,
        new_status: "revoked",
        note: "Endorsement Revoked",
        endorsement: endorsement
      )
    end

    def create_event
      events << Event.new(
        action: "assertion endorsement revoked",
        originating_user: originating_user,
        subject: endorsement.assertion,
        organization_id: organization_id,
        originating_object: endorsement.assertion
      )
    end
  end
end
