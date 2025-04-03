module Actions
  class CreateRegionFeature
    include Actions::Transactional

    attr_reader :feature, :originating_user, :organization_id, :cytogeneic_region_ids

    def initialize(originating_user:, organization_id: nil, cytogeneic_region_ids:)
      @feature = Feature.new(name: construct_feature_name)
      Features::Region.create(
        feature: feature,
      )
      @originating_user = originating_user
      @organization_id = organization_id
      @cytogeneic_region_ids = cytogeneic_region_ids
    end

    def construct_feature_name
      # TODO - correct delimiter?
      CytogeneticRegion.where(id: cytogeneic_region_ids)
        .pluck(:name)
        .join(" ")
    end

    private
    def execute
      feature.save!

      event = Event.new(
        action: "feature created",
        originating_user: originating_user,
        subject: feature,
        organization_id: organization_id,
        originating_object: feature
      )
      events << event
    end
  end
end
