module Actions
  class ResolveFlag
    include Actions::Transactional
    attr_reader :flag, :resolving_user, :organization_id, :flaggable

    def initialize(flag:, resolving_user:, organization_id:)
      @flag = flag
      @flaggable = flag.flaggable
      @resolving_user = resolving_user
      @organization_id = organization_id
    end

    def execute
      resolve_flag
      update_flaggable_status
      create_event
    end

    def resolve_flag
      flag.lock!
      flag.state = "resolved"
      flag.resolving_user = resolving_user
      flag.save
    end

    def update_flaggable_status
      unless flaggable.flags.where(state: "open").exists?
        flaggable.flagged = false
        flaggable.save
      end
    end

    def create_event
      events << Event.new(
        action: "flag resolved",
        originating_user: resolving_user,
        subject: flaggable,
        originating_object: flag,
        organization_id: organization_id
      )
    end
  end
end
