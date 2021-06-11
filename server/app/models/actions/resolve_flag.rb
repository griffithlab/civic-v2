module Actions
  class ResolveFlag
    include Actions::Transactional
    include Actions::WithOriginatingOrganization

    attr_reader :flag, :resolving_user, :organization_id, :comment, :flaggable

    def initialize(flag:, resolving_user:, organization_id:, comment:)
      @flag = flag
      @flaggable = flag.flaggable
      @resolving_user = resolving_user
      @organization_id = organization_id
      @comment = comment
    end

    def execute
      resolve_flag
      update_flaggable_status
      create_event
      create_comment
    end

    def resolve_flag
      flag.lock!
      flag.state = 'resolved'
      flag.resolving_user = resolving_user
      flag.save
    end

    def update_flaggable_status
      unless flaggable.flags.where(state: 'open').exists?
        flaggable.flagged = false
        flaggable.save
      end
    end

    def create_event
      Event.create!(
        action: 'flag resolved',
        originating_user: resolving_user,
        subject: flaggable,
        originating_object: flag,
        organization: resolve_organization(resolving_user, organization_id)
      )
    end

    def create_comment
      cmd = Actions::AddComment.new(
        title: "",
        body: comment,
        commenter: resolving_user,
        commentable: flag,
        organization_id: organization_id
      ).perform
    end
  end
end
