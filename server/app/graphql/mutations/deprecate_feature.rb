class Mutations::DeprecateFeature < Mutations::MutationWithOrg
  description 'Deprecate a feature to prevent it from being used in the future and implicitly deprecate all the variants and molecular profiles linked to this feature.'

  argument :feature_id, Int,
    required: true,
    description: 'The CIViC ID of the feature to deprecate.'

  argument :deprecation_reason, Types::FeatureDeprecationReasonType,
    required: true,
    description: "The reason for deprecation this feature."

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: 'Text giving more context for deprecation this feature.'

  field :feature, Types::Entities::FeatureType, null: true,
    description: 'The deprecated Feature.'

  field :newly_deprecated_variants, [Types::Entities::VariantType], null: true,
    description: 'The variants linked to this feature that are newly deprecated.'

  field :newly_deprecated_molecular_profiles, [Types::Entities::MolecularProfileType], null: true,
    description: 'The molecular profiles linked to this feature\'s variants that weren\'t already deprecated and have been newly deprecated by running this mutation.'

  attr_reader :feature

  def ready?(organization_id: nil, feature_id:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    @feature = Feature.find_by(id: feature_id)
    if feature.blank?
      raise GraphQL::ExecutionError, "Feature with id #{feature_id} doesn't exist."
    end

    if feature.deprecated
      raise GraphQL::ExecutionError, "Feature is already deprecated."
    end

    mps_with_eids = []
    feature.variants.includes(:molecular_profiles).flat_map(&:molecular_profiles).each do |mp|
      if mp.evidence_items.where("evidence_items.status != 'rejected'").count > 0
        mps_with_eids.append(mp.id)
      end
    end
    if mps_with_eids.size > 0
      raise GraphQL::ExecutionError, "Feature is linked to Variants that belong to Molecular Profiles with accepted or submitted Evidence Items: #{mps_with_eids.join(', ')}. Move their Evidence Items to a different Molecular Profile and try again."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    current_user = context[:current_user]

    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    if !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, 'User must be an editor in order to deprecate Features.'
    end

    return true
  end

  def resolve(organization_id: nil, deprecation_reason:, comment:, **kwargs)
    cmd = Activities::DeprecateFeature.new(
      deprecating_user: context[:current_user],
      feature: feature,
      organization_id: organization_id,
      deprecation_reason: deprecation_reason,
      note: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        feature: feature,
        newly_deprecated_molecular_profiles: res.newly_deprecated_molecular_profiles,
        newly_deprecated_variants: res.newly_deprecated_variants
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end
