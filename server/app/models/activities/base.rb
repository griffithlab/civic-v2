module Activities
  class Base
    include Actions::Transactional
    include Actions::WithOriginatingOrganization

    attr_reader :organization, :activity, :note, :user

    def initialize(organization_id:, user:, note: nil)
      @user = user
      @organization = resolve_organization(user, organization_id)
      @note = note
    end

    def execute
      create_activity
      call_actions
      link_activity
      set_verbiage
    end

    def create_activity
      raise NotImplementedError.new("Activity must implement create_activity")
    end

    def call_actions
      raise NotImplementedError.new("Activity must implement call_actions")
    end

    def linked_entities
      raise NotImplementedError.new("Activity must implement linked_entities.")
    end

    def link_activity
      activity.link_entities!(linked_entities)
      activity.events = events.flatten
      events.flatten.each(&:save!)
    end

    def set_verbiage
      activity.verbiage = activity.generate_verbiage
      activity.save!
    end
  end
end
