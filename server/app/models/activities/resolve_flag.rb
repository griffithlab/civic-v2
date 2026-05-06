module Activities
  class ResolveFlag < Base
    attr_reader :resolving_user, :flag, :approvals

    def initialize(resolving_user:, flag:, organization_id: nil, note:)
      super(organization_id: organization_id, user: resolving_user, note: note)
      @flag = flag
    end

    private
    def create_activity
      @activity = ResolveFlagActivity.create!(
        subject: flag.flaggable,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::ResolveFlag.new(
        resolving_user: user,
        flag: flag,
        organization_id: organization&.id
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
    end

    def after_actions
      @approvals = flag.open_activity.approvals
    end

    def linked_entities
      [ flag, approvals ]
    end
  end
end
