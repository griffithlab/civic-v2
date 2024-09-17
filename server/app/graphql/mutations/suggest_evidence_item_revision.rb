class Mutations::SuggestEvidenceItemRevision < Mutations::MutationWithOrg
  description 'Suggest a Revision to an EvidenceItem entity.'

  argument :id, Int, required: true,
    description: 'The ID of the EvidenceItem to suggest a Revision to.'

  argument :fields, Types::Revisions::EvidenceItemFields, required: true,
    description: <<~DOC.strip
      The desired state of the EvidenceItems's editable fields if the change were applied.
      If no change is desired for a particular field, pass in the current value of that field.
    DOC

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: 'Text describing the reason for the change. Will be attached to the Revision as a comment.'

  field :evidence_item, Types::Entities::EvidenceItemType, null: false,
    description: 'The EvidenceItem the user has proposed a Revision to.'

  field :results, [Types::Revisions::RevisionResult], null: false,
    description: <<~DOC.strip
      A list of Revisions generated as a result of this suggestion.
      If an existing Revision exactly matches the proposed one, it will be returned instead.
      This is indicated via the 'newlyCreated' Boolean.
      Revisions are stored on a per-field basis.
      The changesetId can be used to group Revisions proposed at the same time.
    DOC

  attr_reader :evidence_item

  def ready?(organization_id: nil, id:, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    evidence_item = EvidenceItem.find_by(id: id)
    if evidence_item.nil?
      raise GraphQL::ExecutionError, "EvidenceItem with id #{id} doesn't exist."
    end

    @evidence_item = evidence_item

    input_errors = InputAdaptors::EvidenceItemInputAdaptor.check_input_for_errors(evidence_input_object: fields, revised_eid: id)

    if input_errors.any?
      raise GraphQL::ExecutionError, input_errors.join('|')
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(fields:, id:, organization_id: nil, comment:)
    updated_evidence = InputAdaptors::EvidenceItemInputAdaptor.new(evidence_input_object: fields).perform
    revised_objs = Activities::RevisedObjectPair.new(existing_obj: evidence_item, updated_obj: updated_evidence)
    cmd = Activities::SuggestRevisionSet.new(
      revised_objects: revised_objs,
      subject: evidence_item,
      originating_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        evidence_item: evidence_item,
        results: res.revision_results
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end





