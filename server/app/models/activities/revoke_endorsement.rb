module Activities
  class RevokeEndorsement < Base
    attr_reader :endorsement

    def initialize(originating_user:, endorsement:, note:, organization_id: nil)
      super(organization_id: organization_id, user: originating_user, note: note)
      @endorsement = endorsement
    end

    private
    def create_activity
      @activity = RevokeEndorsementActivity.create!(
        subject: endorsement.assertion,
        user: user,
        organization: organization,
        note: note
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
    end

    def linked_entities
      [ endorsement ]
    end
  end
end
