class Mutations::DeprecateVariant < Mutations::MutationWithOrg
  description "Deprecate a variant to prevent it from being used in the future and implicitly deprecate all the molecular profiles linked to this variant."

  argument :variant_id, Int,
    required: true,
    description: "The CIViC ID of the variant to deprecate."

  argument :deprecation_reason, Types::VariantDeprecationReasonType,
    required: true,
    description: "The reason for deprecation this variant."

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: "Text giving more context for deprecation this variant."

  field :variant, Types::Interfaces::VariantInterface, null: true,
    description: "The deprecated Variant."

  field :newly_deprecated_molecular_profiles, [ Types::Entities::MolecularProfileType ], null: true,
    description: "The molecular profiles linked to this variant that weren't already deprecated and have been newly deprecated by running this mutation."

  attr_reader :variant

  def ready?(organization_id: nil, variant_id:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    @variant = Variant.find_by(id: variant_id)
    if variant.blank?
      raise GraphQL::ExecutionError, "Variant with id #{variant_id} doesn't exist."
    end

    if variant.deprecated
      raise GraphQL::ExecutionError, "Variant is already deprecated."
    end

    mps_with_eids = []
    variant.molecular_profiles.each do |mp|
      if mp.evidence_items.where("evidence_items.status != 'rejected'").count > 0
        mps_with_eids.append(mp.id)
      end
    end
    if mps_with_eids.size > 0
      raise GraphQL::ExecutionError, "Variant is linked to Molecular Profiles with accepted or submitted Evidence Items: #{mps_with_eids.join(', ')}. Move their Evidence Items to a different Molecular Profile and try again."
    end

    mps_with_open_revisions = []
    variant.molecular_profiles.each do |mp|
      if Revision.where(field_name: "molecular_profile_id", suggested_value: mp.id, status: "new").count > 0
        mps_with_open_revisions.append(mp.id)
      end
    end
    if mps_with_open_revisions.size > 0
      raise GraphQL::ExecutionError, "Variant is linked to Molecular Profiles that are part of an open revision to move an Evidence Item or Assertion to the Molecular Profile: #{mps_with_open_revisions.join(', ')}. Resolve the revision(s) and try again."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    current_user = context[:current_user]

    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    if !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, "User must be an editor in order to deprecate Variants."
    end

    return true
  end

  def resolve(organization_id: nil, deprecation_reason:, comment:, **kwargs)
    cmd = Activities::DeprecateVariant.new(
      deprecating_user: context[:current_user],
      variant: variant,
      organization_id: organization_id,
      deprecation_reason: deprecation_reason,
      note: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        variant: variant,
        newly_deprecated_molecular_profiles: res.newly_deprecated_molecular_profiles,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
