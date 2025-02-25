class Mutations::SuggestVariantGroupRevision < Mutations::MutationWithOrg
  description "Suggested a Revision to a Variant Group entity"

  argument :id, Int, required: true,
    description: "The ID of the VariantGroup you are suggesting a Revision to"

  argument :fields, Types::Revisions::VariantGroupFields, required: true,
    description: <<~DOC.strip
      The desired state of the VariantGroup's editable fields if the change were applied.
      If no change is desired for a particular field, pass in the current value of that field.
    DOC

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: "Text describing the reason for the change. Will be attached to the Revision as a comment."

  field :variant_group, Types::Entities::VariantGroupType, null: false,
    description: "The VariantGroup the user has proposed a Revision to."

  field :results, [ Types::Revisions::RevisionResult ], null: false,
    description: <<~DOC.strip
      A list of Revisions generated as a result of this suggestion.
      If an existing Revision exactly matches the proposed one, it will be returned instead.
      This is indicated via the 'newlyCreated' Boolean.
      Revisions are stored on a per-field basis.
      The changesetId can be used to group Revisions proposed at the same time.
    DOC

  attr_reader :variant_group


  def ready?(organization_id: nil, id:, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    vg = VariantGroup.find_by(id: id)
    if vg.nil?
      raise GraphQL::ExecutionError, "VariantGroup with id #{id} doesn't exist."
    end

    @variant_group = vg

    existing_source_ids = Source.where(id: fields.source_ids).pluck(:id)
    if existing_source_ids.size != fields.source_ids.size
      raise GraphQL::ExecutionError, "Provided source ids: #{fields.source_ids.join(', ')} but only #{existing_source_ids.join(', ')} exist."
    end

    existing_variant_ids = Source.where(id: fields.variant_ids).pluck(:id)
    if existing_variant_ids.size != fields.variant_ids.size
      raise GraphQL::ExecutionError, "Provided variant ids: #{fields.variant_ids.join(', ')} but only #{existing_variant_ids.join(', ')} exist."
    end

    true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    true
  end

  def resolve(fields:, id:, organization_id: nil, comment:)
    updated_variant_group = VariantGroup.new(
      description: fields.description,
      name: fields.name,
      source_ids: fields.source_ids,
      variant_ids: fields.variant_ids
    )
    revised_objs = Activities::RevisedObjectPair.new(existing_obj: variant_group, updated_obj: updated_variant_group)

    cmd = Activities::SuggestRevisionSet.new(
      revised_objects: revised_objs,
      subject: variant_group,
      originating_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        variant_group: variant_group,
        results: res.revision_results
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
