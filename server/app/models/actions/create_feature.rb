module Actions
  class CreateFeature
    include Actions::Transactional

    attr_reader :feature, :originating_user, :organization_id

    def initialize(feature_name:, feature_instance_type:, originating_user:, organization_id: nil)
      feature_instance = feature_instance_type.new()
      @feature = Feature.new(name: feature_name, feature_instance: feature_instance)
      @originating_user = originating_user
      @organization_id = organization_id
    end

    private
    def execute
      feature.save!

      event = Event.new(
        action: 'feature created',
        originating_user: originating_user,
        subject: feature,
        organization_id: organization_id,
        originating_object: feature
      )

      events << event

    end
  end
end
