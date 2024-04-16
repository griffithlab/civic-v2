module Activities
  class DeprecateFeature < Base
    attr_reader :feature, :newly_deprecated_molecular_profiles, :newly_deprecated_variants, :deprecation_reason

    def initialize(deprecating_user: , feature:, organization_id: nil, deprecation_reason:, note:)
      super(organization_id: organization_id, user: deprecating_user, note: note)
      @feature = feature
      @deprecation_reason = deprecation_reason
    end

    private
    def create_activity
      @activity = DeprecateFeatureActivity.create!(
        subject: feature,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::DeprecateFeature.new(
        deprecating_user: user,
        feature: feature,
        organization_id: organization&.id,
        deprecation_reason: deprecation_reason
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end
      events << cmd.events
      @newly_deprecated_molecular_profiles = cmd.newly_deprecated_molecular_profiles
      @newly_deprecated_variants = cmd.newly_deprecated_variants
    end

    def linked_entities
      newly_deprecated_molecular_profiles + newly_deprecated_variants
    end
  end
end
