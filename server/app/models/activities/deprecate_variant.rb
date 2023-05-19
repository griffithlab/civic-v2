module Activities
  class DeprecateVariant < Base
    attr_reader :variant, :newly_deprecated_molecular_profiles, :deprecation_reason

    def initialize(deprecating_user: , variant:, organization_id: nil, deprecation_reason:, comment_body:)
      super(organization_id: organization_id, user: deprecating_user, comment_body: comment_body)
      @variant = variant
      @deprecation_reason = deprecation_reason
    end

    private
    def create_activity
      @activity = DeprecateVariantActivity.create!(
        subject: variant,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::DeprecateVariant.new(
        deprecating_user: user,
        variant: variant,
        organization_id: organization.id,
        deprecation_reason: deprecation_reason
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end
      events << cmd.events
      @newly_deprecated_molecular_profiles = cmd.newly_deprecated_molecular_profiles
    end

    def commentable
      variant
    end

    def linked_entities
      [newly_deprecated_molecular_profiles, comment]
    end

    def extra_actions
      variant.deprecation_comment = comment
      variant.save!
    end
  end
end
