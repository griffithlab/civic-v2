class Mutations::CreateVariant < Mutations::MutationWithOrg
  description 'Create a new Variant to the database.'

  argument :name, String, required: true,
    description: 'The name of the variant to create.',
    validates: { allow_blank: false }

  argument :feature_id, Int, required: true,
    description: 'The CIViC ID of the Feature to which the new variant belongs.'

  field :variant, Types::Entities::VariantType, null: false,
    description: 'The newly created Variant.'

  field :molecular_profile, Types::Entities::MolecularProfileType, null: false,
    description: "The newly created molecular profile for the new variant."

  field :new, Boolean, null: false,
    description: 'True if the variant was newly created. False if the returned variant was already in the database.'

  def ready?(feature_id:, organization_id: nil, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    if Feature.find_by(id: feature_id).blank?
      raise GraphQL::ExecutionError, "Feature with id #{feature_id} doesn't exist."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(name:, feature_id:, organization_id: nil)
    existing_variant = Variant.left_joins(:variant_aliases).where(feature_id: feature_id)
      .where('variants.name ILIKE ?', name)
      .or(Variant.left_joins(:variant_aliases).where(feature_id: feature_id).where('variant_aliases.name ILIKE ?', name))
      .first

    if existing_variant.present?
      return {
        variant: existing_variant,
        new: false,
        molecular_profile: existing_variant.single_variant_molecular_profile
      }

    else
      cmd = Activities::CreateVariant.new(
        variant_name: name,
        feature_id: feature_id,
        originating_user: context[:current_user],
        organization_id: organization_id,
      )

      res = cmd.perform

      if res.succeeded?
        return {
          variant: res.variant,
          new: true,
          molecular_profile: res.molecular_profile
        }
      else
        raise GraphQL::ExecutionError, res.errors.join(', ')
      end
    end
  end
end
