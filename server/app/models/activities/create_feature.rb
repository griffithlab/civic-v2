module Activities
  class CreateFeature < Base
    attr_reader :feature_name, :feature_instance_type, :feature

    def initialize(originating_user:, organization_id:, feature_name:, feature_instance_type:)
      super(organization_id: organization_id, user: originating_user)
      @feature_name = feature_name
      @feature_instance_type = feature_instance_type
    end

    private
    def create_activity
      @activity = CreateFeatureActivity.new(
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::CreateFeature.new(
        feature_name: feature_name,
        feature_instance_type: feature_instance_type,
        originating_user: user,
        organization_id: organization&.id
      )

      cmd.perform

      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end

      @feature = cmd.feature
      events << cmd.events
    end

    def linked_entities
      nil
    end

    def after_actions
      activity.subject = feature
      activity.save!
    end
  end
end
