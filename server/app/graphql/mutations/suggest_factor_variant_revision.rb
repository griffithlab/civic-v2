class Mutations::SuggestFactorVariantRevision < Mutations::MutationWithOrg
  description "Suggest a Revision to a Variant entity."
  argument :id, Int, required: true,
    description: "The ID of the Variant to suggest a Revision to."

  argument :fields, Types::Revisions::FactorVariantFields, required: true,
    description: <<~DOC.strip
      The desired state of the Variant's editable fields if the change were applied.
      If no change is desired for a particular field, pass in the current value of that field.
    DOC

  argument :comment, String, required: false,
    validates: { length: { minimum: 10 } },
    description: "Text describing the reason for the change. Will be attached to the Revision as a comment."

  field :variant, Types::Variants::FactorVariantType, null: false,
    description: "The Variant the user has proposed a Revision to."

  field :results, [ Types::Revisions::RevisionResult ], null: false,
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

    if !variant.is_a?(Variants::FactorVariant)
      raise GraphQL::ExecutionError, "Variant with id #{id} is a #{variant.type} and you called the FactorVariant mutation."
    end

    @variant = variant

    feature = Feature.find_by(id: fields.feature_id)
    if feature.nil?
      raise GraphQL::ExecutionError, "Provided feature id: #{fields.feature_id} is not found."
    else
      unless variant.is_a?(feature.compatible_variant_type)
        raise GraphQL::ExecutionError, "Provided feature type: #{feature.class} is not compatible with variant type variant.class."
      end
    end

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
    updated_variant = InputAdaptors::FactorVariantInputAdaptor.new(variant_input_object: fields).perform
    updated_variant.single_variant_molecular_profile_id = variant.single_variant_molecular_profile_id
    revised_objs = Activities::RevisedObjectPair.new(existing_obj: variant, updated_obj: updated_variant)

    cmd = Activities::SuggestRevisionSet.new(
      revised_objects: revised_objs,
      subject: variant,
      originating_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        variant: variant,
        results: res.revision_results,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
