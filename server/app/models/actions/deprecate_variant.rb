module Actions
  class DeprecateVariant
    include Actions::Transactional
    attr_reader :deprecating_user, :variant, :newly_deprecated_molecular_profiles, :organization_id, :deprecation_reason

    def initialize(deprecating_user:, variant:, organization_id: nil, deprecation_reason:)
      @deprecating_user = deprecating_user
      @variant = variant
      @organization_id = organization_id
      @deprecation_reason = deprecation_reason
      @newly_deprecated_molecular_profiles = []
    end

    private
    def execute
      mark_variant_as_deprecated
      mark_molecular_profiles_as_deprecated
      create_events
    end

    def mark_variant_as_deprecated
      variant.deprecated = true
      variant.deprecation_reason = deprecation_reason
      variant.save!(validate: false)
    end

    def mark_molecular_profiles_as_deprecated
      variant.molecular_profiles.each do |mp|
        if mp.evidence_items.where("evidence_items.status != 'rejected'").count > 0
          raise "Molecular Profile #{mp.id} can't be deprecated because it has evidence items that are in accepted or submitted state."
        elsif Revision.where(field_name: "molecular_profile_id", suggested_value: mp.id, status: "new").count > 0
          raise "Molecular Profile #{mp.id} can't be deprecated because it is part of an open revision."
        elsif !mp.deprecated
          mp.deprecated = true
          mp.deprecation_reason = "variant_deprecated"
          mp.save!
          newly_deprecated_molecular_profiles.append(mp)
        end
      end
    end

    def create_events
      events << Event.new(
        action: "deprecated variant",
        originating_user: deprecating_user,
        subject: variant,
        originating_object: variant,
        organization_id: organization_id,
      )

      newly_deprecated_molecular_profiles.each do |mp|
        events << Event.new(
          action: "deprecated molecular profile",
          originating_user: deprecating_user,
          subject: mp,
          originating_object: variant,
          organization_id: organization_id,
        )
      end
    end
  end
end
