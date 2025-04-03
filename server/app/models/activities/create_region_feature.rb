module Activities
  class CreateRegionFeature < Base
    attr_reader :feature, :cytogenetic_region_ids

    def initialize(originating_user:, organization_id:, cytogenetic_region_ids:)
      super(organization_id: organization_id, user: originating_user)
      @cytogenetic_region_ids = cytogenetic_region_ids
    end

    private
    def create_activity
      @activity = CreateFeatureActivity.new(
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::CreateRegionFeature.new(
        originating_user: user,
        organization_id: organization&.id,
        cytogenetic_region_ids: cytogenetic_region_ids,
      )

      cmd.perform

      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end

      @feature = cmd.feature
      events << cmd.events
    end

    def linked_entities
      # TODO do we link the cytobands? i don't think so...
      nil
    end

    def after_actions
      activity.subject = feature
      activity.save!
    end
  end
end
