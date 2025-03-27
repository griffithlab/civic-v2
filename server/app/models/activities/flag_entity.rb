module Activities
  class FlagEntity < Base
    attr_reader :flaggable, :flag

    def initialize(flagging_user:, flaggable:, organization_id: nil, note:)
      super(organization_id: organization_id, user: flagging_user, note: note)
      @flaggable = flaggable
    end

    private
    def create_activity
      @activity = FlagEntityActivity.create!(
        subject: flaggable,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::FlagEntity.new(
        flagging_user: user,
        flaggable: flaggable,
        organization_id: organization&.id
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      @flag = cmd.flag
      events << cmd.events
    end

    def linked_entities
      [ flag ]
    end
  end
end
