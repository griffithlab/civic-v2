class Mutations::CreateFusionVariant < Mutations::MutationWithOrg
  description "Create a new Fusion Variant in the database."

  argument :coordinates, Types::Fusion::FusionVariantInputType, required: true

  argument :feature_id, Int, required: true,
    description: "The CIViC ID of the Feature to which the new variant belongs."

  field :variant, Types::Interfaces::VariantInterface, null: false,
    description: "The newly created Variant."

  field :molecular_profile, Types::Entities::MolecularProfileType, null: false,
    description: "The newly created molecular profile for the new variant."

  field :new, Boolean, null: false,
    description: "True if the variant was newly created. False if the returned variant was already in the database."

  def ready?(feature_id:, coordinates:, organization_id: nil, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    f = Feature.find_by(id: feature_id)
    if f.blank?
      raise GraphQL::ExecutionError, "Feature with id #{feature_id} doesn't exist."
    end
    if f.feature_instance_type != "Features::Fusion"
      raise GraphQL::ExecutionError, "Feature with id #{feature_id} is not a Fusion Feature."
    end

    coordinates.each do |_, variant_coords|
      next unless variant_coords.present?

      if !variant_coords.valid?
        errs = variant_coords.errors
        # no variant is present yet, ignore this for now
        errs.delete(:variant)
        if errs.any?
          raise GraphQL::ExecutionError, "#{variant_coords.coordinate_type} is invalid: #{variant_coords.errors.full_messages.join("\n")}."
        end
      end
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(coordinates:, feature_id:, organization_id: nil)
    stubbed_variant = Variants::FusionVariant.new(
      feature_id: feature_id,
      five_prime_end_exon_coordinates: coordinates[:five_prime_coords],
      three_prime_start_exon_coordinates: coordinates[:three_prime_coords]
    )

    vicc_name = stubbed_variant.generate_vicc_name
    civic_name = stubbed_variant.generate_name

    existing_variant = Variants::FusionVariant.find_by(vicc_compliant_name: vicc_name)

    if existing_variant.present?
      return {
        variant: existing_variant,
        new: false,
        molecular_profile: existing_variant.single_variant_molecular_profile,
      }

    else
      cmd = Activities::CreateFusionVariant.new(
        three_prime_start_exon_coords: coordinates[:three_prime_coords],
        five_prime_end_exon_coords: coordinates[:five_prime_coords],
        feature_id: feature_id,
        originating_user: context[:current_user],
        organization_id: organization_id,
        civic_name: civic_name,
        vicc_name: vicc_name
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
