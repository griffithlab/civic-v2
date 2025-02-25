module Actions
  class DeprecateComplexMolecularProfile
    include Actions::Transactional
    attr_reader :deprecating_user, :molecular_profile, :organization_id, :deprecation_reason

    def initialize(deprecating_user:, molecular_profile:, organization_id: nil, deprecation_reason:)
      @deprecating_user = deprecating_user
      @molecular_profile = molecular_profile
      @organization_id = organization_id
      @deprecation_reason = deprecation_reason
    end

    private
    def execute
      mark_molecular_profile_as_deprecated
      create_events
    end

    def mark_molecular_profile_as_deprecated
      molecular_profile.deprecated = true
      molecular_profile.deprecation_reason = deprecation_reason
      molecular_profile.save!
    end

    def create_events
      events << Event.new(
        action: "deprecated molecular profile",
        originating_user: deprecating_user,
        subject: molecular_profile,
        originating_object: molecular_profile,
        organization_id: organization_id,
      )
    end
  end
end
