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

    existing_phenotype_ids = Phenotype.where(id: fields.phenotype_ids).pluck(:id)
    if existing_phenotype_ids.size != fields.phenotype_ids.size
      raise GraphQL::ExecutionError, "Provided phenotype ids: #{fields.phenotype_ids.join(', ')} but only #{existing_phenotype_ids.join(', ')} exist."
    end

    existing_drug_ids = Drug.where(id: fields.drug_ids).pluck(:id)
    if existing_drug_ids.size != fields.drug_ids.size
      raise GraphQL::ExecutionError, "Provided drug ids: #{fields.drug_ids.join(', ')} but only #{existing_drug_ids.join(', ')} exist."
    end

    if !Source.find(fields.source_id)
      raise GraphQL::ExecutionError, "Provided source id: #{fields.source_id} is not found."
    end

    if fields.disease_id && !Disease.find(fields.disease_id)
      raise GraphQL::ExecutionError, "Provided disease id: #{fields.disease_id} is not found."
    end

    if !Variant.find(fields.variant_id)
      raise GraphQL::ExecutionError, "Provided variant id: #{fields.variant_id} is not found."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(fields:, id:, organization_id: nil, comment:)
    #TODO - is this actually needed here or do all the fields line up?
    evidence_fields = InputAdaptors::EvidenceItemInputAdaptor.new(evidence_input_object: fields).perform
    cmd = Actions::SuggestEvidenceItemRevision.new(
      existing_obj: evidence_item,
      fields: evidence_fields,
      originating_user: context[:current_user],
      organization_id: organization_id,
      comment: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        evidence_item: evidence_item,
        results: res.revisions
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end





