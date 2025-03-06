class Mutations::SubmitEvidenceItem< Mutations::MutationWithOrg
  description "Propose adding a new EvidenceItem to the CIViC database."

  argument :fields, Types::Revisions::EvidenceItemFields, required: true,
    description: <<~DOC.strip
      The desired state of the EvidenceItems's editable fields.
    DOC

  argument :comment, String, required: false,
    validates: { length: { minimum: 10 } },
    description: "Text describing any further context or details about your proposed EvidenceItem. Will be attached as a comment."

  field :evidence_item, Types::Entities::EvidenceItemType, null: false,
    description: "The newly created EvidenceItem"


  def ready?(organization_id: nil, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    input_errors = InputAdaptors::EvidenceItemInputAdaptor.check_input_for_errors(evidence_input_object: fields)

    if input_errors.any?
      raise GraphQL::ExecutionError, input_errors.join("|")
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(fields:, organization_id: nil, comment: nil)
    evidence_item = InputAdaptors::EvidenceItemInputAdaptor.new(evidence_input_object: fields).perform


    cmd = Activities::SubmitEvidenceItem.new(
      evidence_item: evidence_item,
      originating_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        evidence_item: evidence_item,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
