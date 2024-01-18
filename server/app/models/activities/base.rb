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
      after_actions
      link_activity
      set_verbiage
      after_completed
      update_timestamps
    end

    def create_activity
      raise NotImplementedError.new("Activity must implement create_activity")
    end

    def call_actions
      raise NotImplementedError.new("Activity must implement call_actions")
    end

    def after_actions
      #no op
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

    def after_completed
      #no op
    end

    def update_timestamps
      activity.user.most_recent_activity_timestamp = activity.created_at
      activity.user.save!(validate: false)

      if activity.organization_id.present?
        activity.organization.most_recent_activity_timestamp = activity.created_at
        activity.organization.save!(validate: false)
      end
    end
  end
end
