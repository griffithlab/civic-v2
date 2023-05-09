module Activities
  class FlagEntity
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :flagging_user, :flaggable, :flag, :organization, :comment, :activity

    def initialize(flagging_user:, flaggable:, organization_id: nil, comment:)
      @flagging_user = flagging_user
      @flaggable = flaggable
      @organization = resolve_organization(flagging_user, organization_id)
      @comment = comment
    end

    private
    def execute
      create_activity
      create_flag
      create_comment
      link_activity
    end

    def create_activity
      @activity = FlagEntityActivity.new(
        subject: flaggable,
        user: flagging_user,
        organization: organization,
      )
    end

    def create_flag
      cmd = Actions::FlagEntity.new(
        flagging_user: flagging_user,
        flaggable: flaggable,
        organization_id: organization.id
      )
      cmd.perform
      @flag = cmd.flag
      events << cmd.events
    end

    def create_comment
      cmd = Actions::AddComment.new(
        title: "",
        body: comment,
        commenter: flagging_user,
        commentable: flag,
        organization_id: organization.id
      )
      cmd.perform
      @comment = cmd.comment
      events << cmd.events
    end

    def link_activity
      activity.link_entities!([flag, comment])
      activity.events = events.flatten
    end
  end
end
