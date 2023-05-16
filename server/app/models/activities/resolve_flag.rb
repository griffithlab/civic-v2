module Activities
  class ResolveFlag
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :resolving_user, :flag, :organization, :comment_body, :comment, :activity

    def initialize(resolving_user:, flag:, organization_id: nil, comment_body:)
      @resolving_user = resolving_user
      @flag = flag
      @organization = resolve_organization(resolving_user, organization_id)
      @comment_body = comment_body
    end

    private
    def execute
      create_activity
      resolve_flag
      create_comment
      link_activity
    end

    def create_activity
      @activity = ResolveFlagActivity.create!(
        subject: flag.flaggable,
        user: resolving_user,
        organization: organization,
      )
    end

    def resolve_flag
      cmd = Actions::ResolveFlag.new(
        resolving_user: resolving_user,
        flag: flag,
        organization_id: organization.id
      )
      cmd.perform
      events << cmd.events
    end

    def create_comment
      cmd = Actions::AddComment.new(
        title: "",
        body: comment_body,
        commenter: resolving_user,
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
