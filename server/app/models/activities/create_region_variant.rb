module Activities
  class CreateRegionVariant < Base
    attr_reader :variant_name, :feature_id, :variant, :molecular_profile, :iscn_name

    def initialize(originating_user:, organization_id:, name:, iscn_name:, feature_id:)
      super(organization_id: organization_id, user: originating_user)
      @variant_name = name
      @iscn_name = iscn_name
      @feature_id = feature_id
    end

    private
    def create_activity
      @activity = CreateVariantActivity.new(
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::CreateVariant.new(
        variant_name: variant_name,
        feature_id: feature_id,
        originating_user: user,
        organization_id: organization&.id,
        additional_attrs: { iscn_name: iscn_name }
      )

      cmd.perform

      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end

      @variant = cmd.variant
      @molecular_profile = cmd.molecular_profile

      variant_aliases = variant.default_variant_aliases.map do |variant_alias|
        VariantAlias.where(name: variant_alias).first_or_create
      end
      variant.variant_aliases = variant_aliases

      variant.save!

      events << cmd.events
    end

    def linked_entities
      molecular_profile
    end

    def after_actions
      activity.subject = variant
      activity.save!
    end
  end
end
