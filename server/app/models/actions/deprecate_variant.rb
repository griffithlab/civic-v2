module Actions
  class DeprecateVariant
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :deprecating_user, :variant, :newly_deprecated_molecular_profiles, :organization_id, :deprecation_reason, :comment

    def initialize(deprecating_user:, variant:, organization_id: nil, deprecation_reason:, comment:)
      @deprecating_user = deprecating_user
      @variant = variant
      @organization_id = organization_id
      @deprecation_reason = deprecation_reason
      @comment = comment
      @newly_deprecated_molecular_profiles = []
    end

    private
    def execute
      mark_variant_as_deprecated
      mark_molecular_profiles_as_deprecated
      create_comment
      create_events
    end

    def mark_variant_as_deprecated
      variant.deprecated = true
      variant.deprecation_reason = deprecation_reason
      variant.save!
    end

    def mark_molecular_profiles_as_deprecated
      variant.molecular_profiles.each do |mp|
        if mp.evidence_items.where("evidence_items.status != 'rejected'").count > 0
          raise "Molecular Profile #{mp.id} can't be deprecated because it has evidence items that are in accepted or submitted state."
        elsif !mp.deprecated
          mp.deprecated = true
          mp.save!
          newly_deprecated_molecular_profiles.append(mp)
        end
      end
    end

    def create_comment
      cmd = Actions::AddComment.new(
        title: "",
        body: comment,
        commenter: deprecating_user,
        commentable: variant,
        organization_id: organization_id
      )
      cmd.perform
      variant.deprecation_comment = cmd.comment
      variant.save!
    end

    def create_events
      events << Event.create!(
        action: 'deprecated variant',
        originating_user: deprecating_user,
        subject: variant,
        originating_object: variant,
        organization: resolve_organization(deprecating_user, organization_id)
      )

      newly_deprecated_molecular_profiles.each do |mp|
        events << Event.create!(
          action: 'deprecated molecular profile',
          originating_user: deprecating_user,
          subject: mp,
          originating_object: variant,
          organization: resolve_organization(deprecating_user, organization_id)
        )
      end
    end
  end
end

