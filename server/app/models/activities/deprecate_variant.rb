module Activities
  class DeprecateVariant < Base
    attr_reader :variant, :newly_deprecated_molecular_profiles, :deprecation_reason

    def initialize(deprecating_user:, variant:, organization_id: nil, deprecation_reason:, note:)
      super(organization_id: organization_id, user: deprecating_user, note: note)
      @variant = variant
      @deprecation_reason = deprecation_reason
    end

    private
    def create_activity
      @activity = DeprecateVariantActivity.create!(
        subject: variant,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::DeprecateVariant.new(
        deprecating_user: user,
        variant: variant,
        organization_id: organization&.id,
        deprecation_reason: deprecation_reason
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
      @newly_deprecated_molecular_profiles = cmd.newly_deprecated_molecular_profiles
    end

    def linked_entities
      newly_deprecated_molecular_profiles
    end
  end
end
