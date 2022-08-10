module Actions
  class FlagEntity
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :flagging_user, :flaggable, :flag, :organization_id, :comment

    def initialize(flagging_user:, flaggable:, organization_id: nil, comment:)
      @flagging_user = flagging_user
      @flaggable = flaggable
      @organization_id = organization_id
      @comment = comment
    end

    private
    def execute
      create_flag
      mark_as_flagged
      create_comment
      create_event
      #subscribe_user
    end

    def create_flag
      @flag = Flag.create!(
        flagging_user: flagging_user,
        flaggable: flaggable,
        state: 'open'
      )
    end

    def mark_as_flagged
      flaggable.flagged = true
      flaggable.save!
    end

    def create_comment
      cmd = Actions::AddComment.new(
        title: "",
        body: comment,
        commenter: flagging_user,
        commentable: flag,
        organization_id: organization_id
      )
      cmd.perform
    end

    def create_event
      Event.create!(
        action: 'flagged',
        originating_user: flagging_user,
        subject: flaggable,
        originating_object: flag,
        organization: resolve_organization(flagging_user, organization_id)
      )
    end

    def subscribe_user
      flag.subscribe_user(flagging_user)
    end
  end
end

