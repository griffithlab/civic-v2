class Mutations::CreateRegionVariant < Mutations::MutationWithOrg
  description "Create a new Region Variant in the database."

  argument :name, Types::Region::RegionVariantNameType, required: true

  argument :feature_id, Int, required: true,
    description: "The CIViC ID of the Feature to which the new variant belongs."

  field :variant, Types::Interfaces::VariantInterface, null: false,
    description: "The newly created Variant."

  field :molecular_profile, Types::Entities::MolecularProfileType, null: false,
    description: "The newly created molecular profile for the new variant."

  field :new, Boolean, null: false,
    description: "True if the variant was newly created. False if the returned variant was already in the database."

  def ready?(feature_id:, organization_id: nil, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    f = Feature.find_by(id: feature_id)
    if f.blank?
      raise GraphQL::ExecutionError, "Feature with id #{feature_id} doesn't exist."
    end
    if f.feature_instance_type != "Features::Region"
      raise GraphQL::ExecutionError, "Feature with id #{feature_id} is not a Region Feature."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(feature_id:, name:, organization_id: nil)
    stubbed_variant = Variants::RegionVariant.new(
      feature_id: feature_id,
      name: name,
    )

    iscn_name = stubbed_variant.generate_iscn_name

    existing_variant = Variants::RegionVariant.find_by(iscn_name: iscn_name)

    if existing_variant.present?
      return {
        variant: existing_variant,
        new: false,
        molecular_profile: existing_variant.single_variant_molecular_profile,
      }

    else
      cmd = Activities::CreateRegionVariant.new(
        feature_id: feature_id,
        originating_user: context[:current_user],
        organization_id: organization_id,
        name: name,
        iscn_name: iscn_name
      )

      res = cmd.perform

      if res.succeeded?
        return {
          variant: res.variant,
          new: true,
          molecular_profile: res.molecular_profile,
        }
      else
        raise GraphQL::ExecutionError, res.errors.join(", ")
      end
    end
  end
end
