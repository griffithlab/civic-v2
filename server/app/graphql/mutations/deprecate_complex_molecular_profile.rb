class Mutations::DeprecateComplexMolecularProfile < Mutations::MutationWithOrg
  description "Deprecate a complex molecular profile to prevent it from being used in the future."

  argument :molecular_profile_id, Int,
    required: true,
    description: "The CIViC ID of the complex molecular profile to deprecate."

  argument :deprecation_reason, Types::MolecularProfileDeprecationReasonMutationInputType,
    required: true,
    description: "The reason for deprecating this molecular profile."

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: "Text giving more context for deprecating this complex molecular profile."

  field :molecular_profile, Types::Entities::MolecularProfileType, null: true,
    description: "The deprecated complex Molecular Profile."

  attr_reader :molecular_profile

  def ready?(organization_id: nil, molecular_profile_id:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    @molecular_profile = MolecularProfile.find_by(id: molecular_profile_id)
    if molecular_profile.blank?
      raise GraphQL::ExecutionError, "Molecular Profile with id #{molecular_profile_id} doesn't exist."
    end

    if molecular_profile.deprecated
      raise GraphQL::ExecutionError, "Molecular Profile is already deprecated."
    end

    if !molecular_profile.is_complex?
      raise GraphQL::ExecutionError, "Molecular Profile is not a complex molecular profile. Deprecate single variant molecular profiles by deprecating the Variant."
    end

    if molecular_profile.evidence_items.where("evidence_items.status != 'rejected'").count > 0
      raise GraphQL::ExecutionError, "Molecular Profile has accepted or submitted Evidence Items. Move its Evidence Items to a different Molecular Profile and try again."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    current_user = context[:current_user]

    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    if !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, "User must be an editor in order to deprecate Molecular Profiles."
    end

    return true
  end

  def resolve(organization_id: nil, deprecation_reason:, comment:, **kwargs)
    cmd = Activities::DeprecateComplexMolecularProfile.new(
      deprecating_user: context[:current_user],
      molecular_profile: molecular_profile,
      organization_id: organization_id,
      deprecation_reason: deprecation_reason,
      note: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        molecular_profile: molecular_profile,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
