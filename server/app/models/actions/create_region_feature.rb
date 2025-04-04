module Actions
  class CreateRegionFeature
    include Actions::Transactional

    attr_reader :feature, :originating_user, :organization_id, :cytogenetic_region_ids

    def initialize(originating_user:, organization_id: nil, cytogenetic_region_ids:)
      @originating_user = originating_user
      @organization_id = organization_id
      @cytogenetic_region_ids = cytogenetic_region_ids
      @feature = Feature.new(name: construct_feature_name)
      Features::Region.create(
        feature: feature,
      )
    end

    def construct_feature_name
      # TODO - correct delimiter?
      # less efficient but ensures that order is preserved
      cytogenetic_region_ids.map{|region_id| CytogeneticRegion.find(region_id).name}.join(" ")
    end

    private
    def execute
      feature.save!

      cytogenetic_region_ids.each_with_index do | region_id, index |
          RegionMember.create(
            region_id: feature.feature_instance_id,
            cytogenetic_region_id: region_id,
            position: index + 1
          )
      end

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
