module Actions
  class DeprecateFeature
    include Actions::Transactional

    attr_reader :deprecating_user, :feature, :newly_deprecated_variants, :organization_id, :deprecation_reason, :newly_deprecated_molecular_profiles

    def initialize(deprecating_user:, feature:, organization_id: nil, deprecation_reason:)
      @deprecating_user = deprecating_user
      @feature = feature
      @organization_id = organization_id
      @deprecation_reason = deprecation_reason
      @newly_deprecated_molecular_profiles = []
      @newly_deprecated_variants = []
    end

    private
    def execute
      mark_feature_as_deprecated
      mark_variants_as_deprecated
      create_events
    end

    def mark_feature_as_deprecated
      feature.deprecated = true
      feature.deprecation_reason = deprecation_reason
      feature.save!(validate: false)
    end

    def mark_variants_as_deprecated
      Variant.where(feature: feature, deprecated: false).each do |variant|
        cmd = Actions::DeprecateVariant.new(
          deprecating_user: deprecating_user,
          variant: variant,
          organization_id: organization_id,
          deprecation_reason: 'feature_deprecated'
        )
        cmd.perform

        if !cmd.succeeded?
          raise StandardError.new(cmd.errors.join(', '))
        end

        newly_deprecated_variants << cmd.variant
        @newly_deprecated_molecular_profiles += cmd.newly_deprecated_molecular_profiles
        events << cmd.events
      end
    end

    def create_events
      events << Event.new(
        action: 'deprecated feature',
        originating_user: deprecating_user,
        subject: feature,
        originating_object: feature,
        organization_id: organization_id,
      )
    end
  end
end

