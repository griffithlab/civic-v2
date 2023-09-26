module Activities
  class ResolveFlag < Base
    attr_reader :resolving_user, :flag

    def initialize(resolving_user:, flag:, organization_id: nil, comment_body:)
      super(organization_id: organization_id, user: resolving_user, comment_body: comment_body)
      @flag = flag
    end

    private
    def create_activity
      @activity = ResolveFlagActivity.create!(
        subject: flag.flaggable,
        user: user,
        organization: organization,
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
        raise StandardError.new(cmd.errors.join(', '))
      end
      events << cmd.events
    end

    def commentable
      flag
    end

    def linked_entities
      [flag, comment]
    end
  end
end
