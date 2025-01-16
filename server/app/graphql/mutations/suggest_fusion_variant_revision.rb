class Mutations::SuggestFusionVariantRevision < Mutations::MutationWithOrg
  description 'Suggest a Revision to a Fusion entity.'
  argument :id, Int, required: true,
    description: 'The ID of the Variant to suggest a Revision to.'

  argument :fields, Types::Revisions::FusionVariantFields, required: true,
    description: <<~DOC.strip
      The desired state of the Variant's editable fields if the change were applied.
      If no change is desired for a particular field, pass in the current value of that field.
    DOC

  argument :comment, String, required: false,
    validates: { length: { minimum: 10 } },
    description: 'Text describing the reason for the change. Will be attached to the Revision as a comment.'

  field :variant, Types::Variants::FusionVariantType, null: false,
    description: 'The Variant the user has proposed a Revision to.'

  field :results, [Types::Revisions::RevisionResult], null: false,
    description: <<~DOC.strip
      A list of Revisions generated as a result of this suggestion.
      If an existing Revision exactly matches the proposed one, it will be returned instead.
      This is indicated via the 'newlyCreated' Boolean.
      Revisions are stored on a per-field basis.
      The changesetId can be used to group Revisions proposed at the same time.
    DOC

  attr_reader :variant

  def ready?(organization_id: nil, id:, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    variant = Variant.find_by(id: id)
    if variant.nil?
      raise GraphQL::ExecutionError, "Variant with id #{id} doesn't exist."
    end

    if !variant.is_a?(Variants::FusionVariant)
      raise GraphQL::ExecutionError, "Variant with id #{id} is a #{variant.type} and you called the FusionVariant mutation."
    end

    @variant = variant

    existing_variant_type_ids = VariantType.where(id: fields.variant_type_ids).pluck(:id)
    if existing_variant_type_ids.size != fields.variant_type_ids.size
      raise GraphQL::ExecutionError, "Provided variant type ids: #{fields.variant_type_ids.join(', ')} but only #{existing_variant_type_ids.join(', ')} exist."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(fields:, id:, organization_id: nil, comment: nil)
    revision_objs = []

    updated_variant = InputAdaptors::FusionVariantInputAdaptor.new(variant_input_object: fields).perform

    updated_coordinates = fields.coordinates

    if updated_coordinates[:five_prime_coords]
      updated_variant.five_prime_end_exon_coordinates = updated_coordinates[:five_prime_coords]
      revision_objs << Activities::RevisedObjectPair.new(
        existing_obj: variant.five_prime_end_exon_coordinates,
        updated_obj: updated_coordinates[:five_prime_coords]
      )
    end

    if updated_coordinates[:three_prime_coords]
      updated_variant.three_prime_start_exon_coordinates = updated_coordinates[:three_prime_coords]
      revision_objs << Activities::RevisedObjectPair.new(
        existing_obj: variant.three_prime_start_exon_coordinates,
        updated_obj: updated_coordinates[:three_prime_coords]
      )
    end

    updated_coordinates.each do |_, coords|
      next unless coords
      coords.variant_id = variant.id
    end

    updated_variant.single_variant_molecular_profile_id = variant.single_variant_molecular_profile_id
    updated_variant.feature = variant.feature
    updated_variant.fusion = variant.feature.feature_instance
    if variant.name == 'Fusion'
      updated_variant.name = 'Fusion'
    else
      updated_variant.name = updated_variant.generate_name
    end
    updated_variant.vicc_compliant_name = updated_variant.generate_vicc_name

    variant_revisions_obj = Activities::RevisedObjectPair.new(existing_obj: variant, updated_obj: updated_variant)
    revision_objs << variant_revisions_obj

    #set variant id?
    cmd = Activities::SuggestRevisionSet.new(
      revised_objects: revision_objs,
      subject: variant,
      originating_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        variant: variant,
        results: res.revision_results
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end





