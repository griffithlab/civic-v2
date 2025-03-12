module Activities
  class RevokeEndorsement < Base
    attr_reader :endorsement, :endorsement_log

    def initialize(originating_user:, endorsement:, organization_id: nil)
      super(organization_id: organization_id, user: originating_user)
      @endorsement = endorsement
    end

    private
    def create_activity
      @activity = RevokeEndorsementActivity.create!(
        subject: endorsement.assertion,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::RevokeEndorsement.new(
        originating_user: user,
        endorsement: endorsement,
        organization_id: organization&.id,
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
      @endorsement = cmd.endorsement
      @endorsement_log = cmd.endorsement_log
    end

    def linked_entities
      [ endorsement, endorsement_log ]
    end
  end
end
