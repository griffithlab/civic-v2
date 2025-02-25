class Mutations::SuggestFusionRevision < Mutations::MutationWithOrg
  description 'Suggest a Revision to a Feature entity of instance type "Fusion".'

  argument :id, Int, required: true,
    description: 'The ID of the Feature of instance type "Fusion" to suggest a Revision to.'

  argument :fields, Types::Revisions::FusionFields, required: true,
    description: <<~DOC.strip
      The desired state of the Fusion's editable fields if the change were applied.
      If no change is desired for a particular field, pass in the current value of that field.
    DOC

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: "Text describing the reason for the change. Will be attached to the Revision as a comment."

  field :fusion, Types::Entities::FusionType, null: false,
    description: "The Fusion the user has proposed a Revision to."

  field :results, [ Types::Revisions::RevisionResult ], null: false,
    description: <<~DOC.strip
      A list of Revisions generated as a result of this suggestion.
      If an existing Revision exactly matches the proposed one, it will be returned instead.
      This is indicated via the 'newlyCreated' Boolean.
      Revisions are stored on a per-field basis.
      The changesetId can be used to group Revisions proposed at the same time.
    DOC

  attr_reader :fusion

  def ready?(organization_id: nil, id:, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    fusion = Feature.find_by(id: id)&.feature_instance
    if fusion.nil?
      raise GraphQL::ExecutionError, "Feature with id #{id} doesn't exist."
    elsif !fusion.is_a?(Features::Fusion)
      raise GraphQL::ExecutionError, "Feature with id #{id} is not a Fusion feature."
    end

    @fusion = fusion

    existing_source_ids = Source.where(id: fields.source_ids).pluck(:id)
    if existing_source_ids.size != fields.source_ids.size
      raise GraphQL::ExecutionError, "Provided source ids: #{fields.source_ids.join(', ')} but only #{existing_source_ids.join(', ')} exist."
    end

    true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    true
  end

  def resolve(fields:, id:, organization_id: nil, comment:)
    updated_fusion = InputAdaptors::FusionInputAdaptor.new(
      fusion_input_object: fields,
    ).perform
    revised_objs = Activities::RevisedObjectPair.new(existing_obj: fusion, updated_obj: updated_fusion)

    cmd = Activities::SuggestRevisionSet.new(
      revised_objects: revised_objs,
      subject: fusion.feature,
      originating_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        fusion: fusion,
        results: res.revision_results
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
